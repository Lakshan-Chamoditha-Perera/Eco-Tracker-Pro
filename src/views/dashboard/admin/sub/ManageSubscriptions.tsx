import TextField from "../../../../components/input/TextField.tsx";
import { Button } from "@nextui-org/react";
import SubscriptionCard from "../../../../components/card/SubscriptionCard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { RadioGroup, Radio } from "@nextui-org/react";
import { PackageDto } from "../../../../dto/package.dto.ts";
import StandardResponse from "../../../../dto/rsp/StandardResponse.tsx";

const ManageSubscriptions = () => {
  const [id, setId] = useState<string>("");
  const [service_id, setService_id] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [remarks, setRemarks] = useState<string>("");
  const [availability, setAvailability] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File>();

  const [subscriptionList, setSubscriptionList] = useState<PackageDto[]>([]);

  const fetchPackagesList = () => {
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:3001/package/getAll",
    };

    let rsp = axios.request(config);

    rsp.then((response) => {
      let rsp = response.data as StandardResponse;
      let data = rsp.data as PackageDto[];
      setSubscriptionList(data);
    });
  };
  useEffect(() => {
    fetchPackagesList();
  }, []);

  const handleService_idChange = (newValue: string) => {
    setService_id(newValue);
  };

  const handleNameChange = (newValue: string) => {
    setName(newValue);
  };

  const handleDescriptionChange = (newValue: string) => {
    setDescription(newValue);
  };

  const handlePriceChange = (newValue: string) => {
    setPrice(parseInt(newValue));
  };

  const handleRemarksChange = (newValue: string) => {
    setRemarks(newValue);
  };

  const handleAvailabilityChange = (newValue: boolean) => {
    setAvailability(newValue);
  };

  const handleImageFileChange = (newValue: File) => {
    setImageFile(newValue);
  };

  const savePackage = () => {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:3001/package/save",
      data: {
        name: name,
        description: description,
        price: price,
        remarks: remarks,
        availability: availability,
      },
    };

    let rsp = axios.request(config);

    rsp.then((response) => {
      console.log(response.data);
      let rsp = response.data as StandardResponse;
      if (rsp.status === 200) {
        fetchPackagesList();
        Swal.fire("Package Saved");
      }
    });
  };

  const deletePackage = () => {
    if (id) {
      let config = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        url: "http://localhost:3001/package/delete",
        data: {
          _id: service_id,
        },
      };

      let rsp = axios.request(config);

      rsp.then((response) => {
        console.log(response.data);
        let rsp = response.data as StandardResponse;
        if (rsp.status === 200) {
          fetchPackagesList();
          Swal.fire("Package Deleted");
        }
      });
    } else {
      Swal.fire("Select a package to delete");
    }
  };

  return (
    <div>
      <div
        className={
          "flex w-0.8 justify-evenly p-2 min-h-[100px] flex-col border"
        }
      >
        <h1 className={"text-5xl font-medium mb-5 text-green-500"}>
          Manage Subscriptions
        </h1>
      </div>

      <section
        className={"flex flex-col mt-[50px] border p-[20px] rounded-[20px]"}
      >
        <h2 className={"text-[20px] font-medium text-[#004B50]"}>
          Manage Package
        </h2>
        <form
          className={
            " border border-red-600  border-2px w-[100%] grid bg-white grid-cols-8"
          }
        >
          <div className={"col-span-6 border border-blue-400 p-3"}>
            <div className={"flex p-1  border justify-end col-span-2"}>
              <TextField
                label="Package ID"
                type="text"
                isRequired={true}
                color={"success"}
                onChange={handleService_idChange}
                value={service_id}
              />
            </div>
            <div className={"flex  p-1 justify-end col-span-2"}>
              <TextField
                label="Name"
                type="text"
                isRequired={true}
                color={"success"}
                onChange={handleNameChange}
                value={name}
              />
            </div>
            <div className={"flex  p-1 justify-end col-span-2"}>
              <TextField
                label="Description"
                type="text"
                isRequired={true}
                color={"success"}
                onChange={handleDescriptionChange}
                value={description}
              />
            </div>
            <div className={"flex p-1  justify-end col-span-2"}>
              <TextField
                label="Price Per day"
                type="text"
                isRequired={true}
                color={"success"}
                onChange={handlePriceChange}
                value={price}
              />
            </div>
            <div
              className={
                "flex  bg-[#EAFAF1] text-green-300 rounded-[15px] text-[15px] ml-[4px]  w-[99%] items-start p-[5px] justify-start col-span-2"
              }
            >
              <RadioGroup label="Availability" orientation="horizontal">
                <Radio value="available">yes</Radio>
                <Radio value="not-available">no</Radio>
              </RadioGroup>
            </div>
            <div className={"flex  p-1 justify-end col-span-2"}>
              <TextField
                label="Remarks"
                placeholder=""
                type="text"
                isRequired={true}
                color={"success"}
                onChange={handleRemarksChange}
                value={remarks}
              />
            </div>
          </div>
          <div className={"col-span-2 border-red-600 border p-3"}>
            <div className={"grid grid-rows-6 "}>
              <div className={"flex-col p-1 flex items-center"}>
                <TextField type="file" isRequired={true} color={"success"} />
              </div>
              <img
                className={
                  "border-2  border-red-800 row-span-5 rounded-[10px] w-[100%] h-[100%] "
                }
              />
            </div>
          </div>
        </form>
        <div className={"flex flex-row justify-end p-2"}>
          <Button
            className={"bg-green-500 text-white rounded-[10px] p-2 m-2"}
            onPress={savePackage}
          >
            Save
          </Button>
          <Button className={"bg-yellow-500 text-white rounded-[10px] p-2 m-2"}>
            Update
          </Button>
          <Button className={"bg-red-500 text-white rounded-[10px] p-2 m-2"}>
            Delete
          </Button>
        </div>
        {/*button section (save update delete)*/}
      </section>
      <section
        className={"flex flex-col mt-[50px] border p-[20px] rounded-[20px]"}
      >
        <h2 className={"text-[20px] font-medium text-[#004B50]"}>
          Ongoing Packages
        </h2>
        <div
          className={
            "grid grid-cols-3 p-5 gap-5 w-full border min-h-[250px] justify-between"
          }
        >
          {subscriptionList.map((e, index) => (
            <div
              key={index}
              onClick={() => {
                console.log(e);
                setService_id(e._id);
                setName(e.name);
                setDescription(e.description);
                setPrice(e.price);
                setRemarks(e.remarks);
                setAvailability(e.availability);
              }}
            >
              <SubscriptionCard key={index} ele={e} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManageSubscriptions;
