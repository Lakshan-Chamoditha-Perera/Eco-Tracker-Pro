import TextField from "../../../../components/input/TextField.tsx";
import { Button } from "@nextui-org/react";
import ServiceCard2 from "../../../../components/card/ServiceCard2.tsx";
import { useEffect, useState } from "react";
import { ServiceDto } from "../../../../dto/service.dto.ts";
import axios from "axios";
import StandardResponse from "../../../../dto/rsp/StandardResponse.tsx";
import Swal from "sweetalert2";
import { IoTrashBin } from "react-icons/io5";
import { RadioGroup, Radio } from "@nextui-org/react";

const ManageServices = () => {
  const [serviceList, setServiceList] = useState<ServiceDto[]>([]);

  const [service_id, setService_id] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [selected, setSelected] = useState("available");
  const [remarks, setRemarks] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
  };

  const handleNameChange = (newValue: string) => {
    setName(newValue);
  };
  const handleDescriptionChange = (newValue: string) => {
    setDescription(newValue);
  };
  const handlePriceChange = (newValue: string) => {
    setPrice(Number(newValue));
  };
  const handleRemarkChange = (newValue: string) => {
    setRemarks(newValue);
  };
  
  const handleService_idChange = (newValue: string) => {

  }

  let refreshServiceList = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/service/getAll",
    };

    let rsp = axios.request(config);
    rsp.then((response) => {
      let rspData = response.data as StandardResponse;
      let data = rspData.data as ServiceDto[];
      setServiceList(data);
    });
  };

  useEffect(() => {
    refreshServiceList();
  }, []);

  const saveImage = (selectedFile: File | null): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!selectedFile) {
        reject("File input element not found.");
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedFile);

      const config = {
        method: "post",
        url: "http://localhost:3001/image",
        data: formData,
      };
      axios
        .request(config)
        .then((response) => {
          resolve(response.data.profile_url);
        })
        .catch((error) => {
          reject("Error uploading image");
        });
    });
  };
  return (
    <div className="py-3 bg-[#FBFBFB] ">
      <div
        className={
          "flex w-0.8 bg-white drop-shadow-l shadow-lg justify-evenly p-2 min-h-[300px] flex-col rounded-[20px]"
        }
      >
        <h1 className={"text-5xl  font-medium mb-5 text-green-500"}>
          Services
        </h1>
        <ul
          className={
            "flex flex-row w-full max-h-350px justify-between overflow-y-scroll"
          }
        >
          {serviceList.map((element, index) => (
            <li
              key={index}
              className={
                "m-[10px]  bg-white drop-shadow-l shadow-lg rounded-[20px]"
              }
              onClick={() => {
                setService_id(element.service_id);
                setName(element.name);
                setDescription(element.description);
                setPrice(element.price);
                setRemarks(element.remarks);
                setSelected(
                  element.availability ? "available" : "not-available"
                );
              }}
            >
              <ServiceCard2
                name={element.name}
                description={element.description}
                price={element.price}
                status={element.availability}
                id={element.id}
                service_id={element.service_id}
                remark={element.remarks}
                img_url={element.img_url}
              />
              <div className={"pb-5 flex w-full flex-row px-1 justify-end "}>
                <Button
                  className={
                    " rounded-full hover:bg-red-200  bg-white drop-shadow-l shadow-lg   w-[10px] h-[80px] text-[50px] bold text-[red]"
                  }
                  onClick={() => {
                    console.log(element.service_id);
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this !",
                      icon: "warning",
                      confirmButtonColor: "#0FAF72",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      console.log(result);
                      if (result.isConfirmed) {
                        deleteService(element.service_id);
                      }
                    });
                  }}
                >
                  <IoTrashBin />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <section
        className={
          "flex flex-col mt-[50px] bg-white drop-shadow-l justify-around items-center shadow-lg border p-[20px] rounded-[20px]"
        }
      >
        <h2 className={"text-2xl w-full font-bold text-[#004B50]"}>
          Manage Services
        </h2>

        <form
          className={
            "p-[20px] w-[80%] grid bg-white max-h-[900px] border grid-rows-8 gap-5 "
          }
        >
          <div className={"flex justify-end"}>
            <TextField
              label="Service ID"
              placeholder="S001"
              type="text"
              value={service_id}
              isRequired={true}
              color={"success"}
       editable={false}
              onChange={handleService_idChange}
              // onChange={(newValue) => setService_id(newValue)}
            />
          </div>
          <div className={"flex justify-end"}>
            <TextField
              label="Name"
              placeholder="Service 1"
              type="text"
              isRequired={true}
              value={name}
              color={"success"}
              onChange={handleNameChange}
            />
          </div>
          <div className={"flex justify-end"}>
            <TextField
              label="Description"
              placeholder="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium"
              type="text"
              value={description}
              isRequired={true}
              color={"success"}
              onChange={handleDescriptionChange}
            />
          </div>

          <div
            className={
              "gap-2 grid grid-cols-2 text-[15px] rounded-[13px]  justify-start"
            }
          >
            <TextField
              label="Price Per day"
              placeholder="49.99"
              type="text"
              isRequired={true}
              color={"success"}
              value={price}
              onChange={handlePriceChange}
            />

            <div
              className={
                "flex bg-[#EAFAF1] rounded-[15px] px-1 mx-2 justify-start"
              }
            >
              <RadioGroup
                label="Availability"
                orientation="horizontal"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <Radio value="available">yes</Radio>
                <Radio value="not-available">no</Radio>
              </RadioGroup>
            </div>
          </div>
          <div className={"flex justify-end"}>
            <TextField
              label="Remark"
              placeholder="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium"
              type="text"
              value={remarks}
              isRequired={true}
              color={"success"}
              onChange={handleRemarkChange}
            />
          </div>

          <div className={"grid grid-cols-2 row-span-4 gap-5"}>
            <div
              className={
                "grid col-span-2 row-span-8 grid-cols-2 grid-rows-5 gap-5"
              }
            >
              <div
                className={"row-span-5 col-span-2 flex-col flex items-center"}
              >
                <div className="w-full border p-2 rounded-[20px]">
                  <input
                    type="file"
                    className="w-full border"
                    onChange={handleFileChange}
                  />
                  {selectedFile && (
                    <img
                      className={
                        "my-5 rounded-[20px] w-3/4 h-full max-h-[250px]"
                      }
                      src={URL.createObjectURL(selectedFile)}
                      alt="Preview"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className={"w-[80%] h-[80px] flex-row  flex px-5 justify-end"}>
          <Button
            className={
              "bg-[#0FAF72] mr-2 hover:shadow-l w-[10%] h-[60%]  text-white font-medium rounded-[20px] py-[10px] hover:bg-green-400"
            }
            onClick={saveService}
          >
            Save
          </Button>
          <Button
            className={
              "bg-[#0FAF72] hover:shadow-l w-[10%] h-[60%]  text-white font-medium rounded-[20px] py-[10px] hover:bg-green-400"
            }
            onClick={updateService}
          >
            Update
          </Button>
        </div>
      </section>
    </div>
  );

  async function saveService() {
    try {
      const imageUrl = await saveImage(selectedFile);

      const config = {
        method: "post",
        url: "http://localhost:3001/service/save",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: `${name}`,
          description: `${description}`,
          price: `${price}`,
          availability: selected == "available" ? true : false,
          remarks: `${remarks}`,
          img_url: `${imageUrl}`,
        },
      };

      const response = await axios.request(config);

      console.log(response.data);
      Swal.fire({
        title: "Success!",
        text: "Service has been saved.",
        icon: "success",
        confirmButtonColor: "#0FAF72",
      });

      refreshServiceList();
    } catch (error) {
      console.error(error);

      if (error === "Error uploading image") {
        // Handle image upload error
        Swal.fire({
          title: "Error!",
          text: "Image upload failed. Service has not been saved.",
          icon: "error",
          confirmButtonColor: "#0FAF72",
        });
      } else {
        // Handle other errors
        Swal.fire({
          title: "Error!",
          text: "Service has not been saved.",
          icon: "error",
          confirmButtonColor: "#0FAF72",
        });
      }
    }
  }

  async function updateService() {
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/service/update",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        service_id: `${service_id}`,
        name: `${name}`,
        description: `${description}`,
        price: `${price}`,
        availability: selected == "available" ? true : false,
        remarks: `${remarks}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: "Success!",
          text: "Service has been updated.",
          icon: "success",
          confirmButtonColor: "#0FAF72",
        });
        refreshServiceList();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Service has not been updated.",
          icon: "error",
          confirmButtonColor: "#0FAF72",
        });
      });
  }

  async function deleteService(id: string) {
    axios
      .delete("http://localhost:3001/service/delete", {
        params: {
          service_id: `${id}`,
        },
      })
      .then((response) => {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#0FAF72",
        });
        refreshServiceList();
      });
  }
};

export default ManageServices;
