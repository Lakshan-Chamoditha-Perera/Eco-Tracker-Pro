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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
  };

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

  const saveItem = async () => {
    const imageUrl = await saveImage(selectedFile);

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
        image: imageUrl,
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
      Number.isNaN(parseInt(newValue)) ? setQty(0) : setQty(parseInt(newValue));
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
          "flex w-0.8 shadow-lg justify-evenly p-2 min-h-[100px] flex-col drop-shadow-xl "
        }
      >
        <h1 className={"text-5xl font-medium mb-5 text-green-500"}>
          Manage Sales
        </h1>
      </div>
      <section
        className={"flex flex-col mt-[50px] shadow  p-[20px] rounded-[20px]"}
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
              key={index}
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
