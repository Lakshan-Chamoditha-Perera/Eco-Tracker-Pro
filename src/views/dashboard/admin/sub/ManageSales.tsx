import TextField from "../../../../components/input/TextField.tsx";
import { Button } from "@nextui-org/react";
import ItemCard from "../../../../components/card/ItemCard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import StandardResponse from "../../../../dto/rsp/StandardResponse.tsx";
import { ItemDto } from "../../../../dto/item.dto.ts";

const ManageSales = () => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [itemList, setItemList] = useState<ItemDto[]>([]);

  const saveItem = () => {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:3001/item/save",
      data: {
        name: name,
        description: description,
        price: price,
        qty: qty,
      },
    };

    let rsp = axios.request(config);

    rsp.then((response) => {
      console.log(response.data);
      let rsp = response.data as StandardResponse;
      if (rsp.status === 200) {
        Swal.fire("Success", rsp.message, "success");
        fetchItemList();
      } else {
        Swal.fire("Error", rsp.message, "error");
      }
    });
  };

  const handleNameChange = (newValue: string) => {
    setName(newValue);
  };

  const handleDescriptionChange = (newValue: string) => {
    setDescription(newValue);
  };

  const handlePriceChange = (newValue: string) => {
    try {
      setPrice(parseInt(newValue));
    } catch (e) {
      Swal.fire("Invalid Price");
    }
  };

  const handleQtyChange = (newValue: string) => {
    try {
      setQty(parseInt(newValue));
    } catch (e) {
      Swal.fire("Invalid Qty");
    }
  };

  const fetchItemList = () => {
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:3001/item/getAll",
    };

    let rsp = axios.request(config);

    rsp.then((response) => {
      console.log(response.data);
      let rsp = response.data as StandardResponse;
      let data = rsp.data as ItemDto[];
      setItemList(data);
    });
  };

  useEffect(() => {
    fetchItemList();
  }, []);

  return (
    <div>
      <div
        className={
          "flex w-0.8 justify-evenly p-2 min-h-[100px] flex-col border"
        }
      >
        <h1 className={"text-5xl font-medium mb-5 text-green-500"}>
          Manage Sales
        </h1>
      </div>
      <section
        className={"flex flex-col mt-[50px] border p-[20px] rounded-[20px]"}
      >
        <h2 className={"text-[20px] font-medium text-[#004B50]"}>
          Manage Items
        </h2>
        <form
          className={
            " border border-red-600  border-2px w-[100%] grid bg-white grid-cols-8"
          }
        >
          <div className={"col-span-6 border border-blue-400 p-3"}>
            <div className={"flex p-1  border justify-end col-span-2"}></div>
            <div className={"flex  p-1 justify-end col-span-2"}>
              <TextField
                label="Name"
                placeholder="Item 1"
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
                placeholder="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium"
                type="text"
                isRequired={true}
                color={"success"}
                onChange={handleDescriptionChange}
                value={description}
              />
            </div>
            <div className={"flex p-1  justify-end col-span-2"}>
              <TextField
                label="Price "
                placeholder="49.99"
                type="text"
                isRequired={true}
                color={"success"}
                onChange={handlePriceChange}
                value={price}
              />
            </div>
            <div className={"flex  p-1 justify-end col-span-2"}>
              <TextField
                label="Qty"
                placeholder="10"
                type="text"
                isRequired={true}
                color={"success"}
                onChange={handleQtyChange}
                value={qty}
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
            onPress={saveItem}
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
        <h1 className={"text-[20px] font-medium text-[#004B50]"}>
          Listed Items
        </h1>
        <div
          className={
            "grid grid-cols-5 p-5 gap-5 w-full border min-h-[250px] justify-between"
          }
        >
          {itemList.map((item, index) => (
            <ItemCard
              key={item.id}
              element={item}
              onPress={() => {
                setName(item.name);
                setDescription(item.description);
                setPrice(item.price);
                setQty(item.qty);
                setId(item.id);
                Swal.fire("Clicked");
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default ManageSales;
