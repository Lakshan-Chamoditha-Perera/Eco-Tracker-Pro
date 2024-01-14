import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState } from "react";
import { ItemDto } from "../../dto/item.dto";

// @ts-ignore
const ItemCard = (props) => {
  const [item] = useState<ItemDto>(props.item);
  
  return (
    <Card
      shadow="sm"
      className={
        "m-3 w-[95%] hover:bg-[#EAF5F1] transition duration-1000 ease-in-out "
      }
      isPressable
      onClick={props.action}
    >
      <CardBody className="overflow-visible mb-2 p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.name}
          className="w-full object-cover h-[200px]"
          src={"src/assets/Eco Track Pro Logo.png"}
        />
      </CardBody>
      <CardFooter className="text-small flex flex-col pb-5 justify-between">
        <b className={"text-[18px]"}>{item.name}</b>
        <br />
        <p className="text-default-500 text-[20px]">${item.price}</p>
        <br />
        <p className="text-default-500 text-[20px]">${item.qty}</p>
        <br />
      </CardFooter>
    </Card>
  );
};
export default ItemCard;
