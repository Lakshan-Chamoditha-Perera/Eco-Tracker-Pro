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
  const [img_1, setImg_1] = useState<string>("");
  const [img_2, setImg_2] = useState<string>("");
  const [selected, setSelected] = useState("available");
  const [remarks, setRemarks] = useState<string>("");

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
    // getOngoingServiceID();
  }, []);

  return (
    <div className="py-3">
      <div
        className={
          "flex w-0.8 justify-evenly p-2 min-h-[300px] flex-col border rounded-[20px] border-red-500"
        }
      >
        <h1 className={"text-5xl font-medium mb-5 text-green-500"}>Services</h1>
        {/**/}
        {/*grid grid-cols-4 border gap-4*/}
        {/*{
                    services.map((service, index) => (
                        <li className={'w-full'}>
                            <ServiceCard1 key={index} title={service.title} content={service.content}
                                         img_url={service.img_url}/>
                        </li>
                    ))
                }*/}

        <ul
          className={
            "flex flex-row w-full max-h-350px justify-between overflow-y-scroll"
          }
        >
          {serviceList.map((element, index) => (
            <li
              key={index}
              className={"m-[10px] border border-red-500"}
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
              />
              <div
                className={
                  " border-3 pb-5 flex w-full h-[17%] flex-row px-1 justify-end "
                }
              >
                <Button
                  className={"w-[25%] h-full text-[20px] bold text-white"}
                  color={"warning"}
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
        className={"flex flex-col mt-[50px] border p-[20px] rounded-[20px]"}
      >
        <h2 className={"text-[20px] font-medium text-[#004B50]"}>
          Manage Services
        </h2>

        <form
          className={"p-[20px] border w-[80%] grid bg-white grid-rows-8 gap-5 "}
        >
          <div className={"flex justify-end"}>
            <TextField
              label="Service ID"
              placeholder="S001"
              type="text"
              value={service_id}
              isRequired={true}
              color={"success"}
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
              " border gap-2 grid grid-cols-2 text-[15px] rounded-[13px]  justify-start"
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

          <div className={"grid grid-cols-2 border row-span-4 gap-5"}>
            <div
              className={
                "grid col-span-2 row-span-8 grid-cols-2 grid-rows-5 gap-5"
              }
            >
              <div className={"row-span-5 flex-col flex items-center"}>
                <span
                  className={"flex items-start px-2 w-full text-[12px]"}
                ></span>
                <TextField type="file" isRequired={true} color={"success"} />
                <img className={"border-2 my-5 rounded-[20px] w-3/4 h-full"} />
              </div>
              <div className={"row-span-5 flex-col flex items-center"}>
                <span
                  className={"flex items-start px-2 w-full text-[12px]"}
                ></span>
                <TextField type="file" isRequired={true} color={"success"} />
                <img className={"border-2 my-5 rounded-[20px] w-3/4 h-full"} />
              </div>
            </div>
          </div>
        </form>

        <div
          className={"w-[80%] h-[80px] border flex-row  flex px-5 justify-end"}
        >
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
    let config = {
      method: "post",
      maxBodyLength: Infinity,
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
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: "Success!",
          text: "Service has been saved.",
          icon: "success",
          confirmButtonColor: "#0FAF72",
        });
        refreshServiceList();
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Service has not been saved.",
          icon: "error",
          confirmButtonColor: "#0FAF72",
        });
      });
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
