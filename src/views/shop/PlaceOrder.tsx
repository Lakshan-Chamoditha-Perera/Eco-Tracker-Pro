import { useEffect, useState } from "react";
import ItemCard from "../../components/card/ItemCard.tsx";
import TextField from "../../components/input/TextField.tsx";
import { Button } from "@nextui-org/react";
import axios from "axios";
import StandardResponse from "../../dto/rsp/StandardResponse.tsx";
import { ItemDto } from "../../dto/item.dto.ts";
import Swal from "sweetalert2";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const PlaceOrder = () => {
  const [itemList, setItemList] = useState<ItemDto[]>([]);
  const [cartList, setCartList] = useState<ItemDto[]>([]);
  const [total_price, setTotalPrice] = useState<number>(0);

  const place_order = () => {
    let user = JSON.parse(localStorage.getItem("user") as string);

    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:3001/order/save",
      data: {
        user: user ? user : null,
        itemlist: cartList,
        totalAmount: total_price,
      },
    };

    let rsp = axios.request(config);
    rsp.then((response) => {
      console.log(response.data);
      let rsp = response.data as StandardResponse;
      if (rsp.status == 200) {
        Swal.fire({
          title: "Order Placed!",
          text: "Your order has been placed successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Order Failed!",
          text: "Your order has been failed!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  };

  const calc_total = () => {
    setTotalPrice(0);
    let price = 0;
    cartList.forEach((element) => {
      price += element.qty * element.price;
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    calc_total();
  }, [cartList]);

  const addToCart = (item: ItemDto) => {
    let qty = 0;

    Swal.fire({
      title: "Enter Quantity",
      input: "number",
      inputLabel: "Quantity",
      inputPlaceholder: "Enter Quantity",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to enter quantity!";
        }
      },
    })
      .then((result) => {
        qty = parseInt(result.value as string);
        if (cartList.includes(item)) {
          let index = cartList.indexOf(item);
          let cartItem = cartList[index];
          cartItem.qty = cartItem.qty + qty;
          setCartList([...cartList]);
        } else {
          item.qty = qty;
          setCartList([...cartList, item]);
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        })
      });
  };

  useEffect(() => {
    fetchItemList();
  }, []);

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

  return (
    <div
      className={"flex w-0.8 justify-evenly p-2 min-h-[300px] flex-col border"}
    >
      <div className={"border"}>
        <h1 className={"text-5xl font-medium mb-3 text-green-500"}>
          Online Shop
        </h1>
        <p className={"text-xl font-medium mb-3 text-green-500"}>
          Order your eco-friendly products here.
        </p>
        <div
          className={
            "grid grid-cols-4 grid-rows-10 gap-5 min-h-[300px] border-2 border-red-400 justify-between p-10 items-center"
          }
        >
          <div
            className={
              "col-span-4 row-span-1 border-2 text-3xl border-blue-500 justify-between items-center h-full"
            }
          >
            {" "}
            Cart
          </div>

          <div
            className={
              "col-span-3 row-span-9 border-2 border-amber-500 justify-between items-center h-full"
            }
          >
            <Table aria-label="Cart Items Table">
              <TableHeader>
                <TableColumn>Item Name</TableColumn>
                <TableColumn>Description</TableColumn>
                <TableColumn>Price</TableColumn>
                <TableColumn>Qty</TableColumn>
                <TableColumn>Option</TableColumn>
              </TableHeader>
              <TableBody>
                {cartList
                  .slice()
                  .reverse()
                  .map((cartItem, index) => (
                    <TableRow key={index}>
                      <TableCell>{cartItem.name}</TableCell>
                      <TableCell>{cartItem.description}</TableCell>
                      <TableCell>{cartItem.price}</TableCell>
                      <TableCell>{cartItem.qty}</TableCell>
                      <TableCell>5 </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          <div
            className={
              "row-span-3 p-3 border-2 border-green-950 justify-between items-center h-full"
            }
          >
            <h1 className={"text-[20px]"}>Total Price</h1>
            <h1 className={"text-5xl p-3 border font-medium text-green-500"}>
              {`Rs.${total_price}`}
            </h1>
          </div>
          <div
            className={
              "row-span-6 p-3 border-2 border-green-950 justify-between items-center h-full"
            }
          >
            <h1 className={"text-[20px]"}>Payment Amount</h1>
            <TextField
              label="Payment"
              placeholder="1000.00"
              type="text"
              isRequired={true}
              color={"success"}
            />
            <Button color={"success"} onClick={place_order}>
              Place Order
            </Button>
          </div>
        </div>
      </div>

      <div className={"flex mt-8 flex-col"}>
        <h1 className={"text-5xl font-medium mb-3 text-green-500"}>
          Shop Items
        </h1>

        <div
          className={
            "flex w-0.8 bg-white drop-shadow-l shadow-lg justify-evenly p-2 min-h-[300px] flex-col rounded-[20px]"
          }
        >
          <ul
            className={
              "flex flex-row w-full max-h-350px justify-between overflow-y-scroll"
            }
          >
            {itemList.map((item, index) => (
              <ItemCard onPress={addToCart} key={index} element={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
