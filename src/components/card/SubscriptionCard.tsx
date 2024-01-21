import { useState } from "react";
import { Button } from "@nextui-org/react";
import { PackageDto } from "../../dto/package.dto";

// @ts-ignore
const SubscriptionCard = (props) => {
  const [ele] = useState<PackageDto>(props.ele);

  const [imageFile, setImageFile] = useState<File>();

  return (
    <div
      className={
        "border-blue-400 border  hover:bg-[#EAF5F1] transition duration-1000 ease-in-out min-h-[600px] gap-2 p-2 grid grid-rows-6 w-[75%] "
      }
    >
      <div className="border">
        <h1 className={" text-2xl border font-medium text-green-500"}>
          {ele.name}
        </h1>
        <p>{ele?.description}</p>
        <p className="border">
          {ele.availability ? "Available" : "Not Available"}
        </p>
      </div>
      <h1
        className={
          " border flex flex-row items-center justify-center text-[50px] font-medium text-green-500"
        }
      >
        $ {ele.price}
      </h1>
      <div className={"row-span-3  border border-red-600"}>
        <h1 className={"   grid text-2xl font-medium text-green-500"}></h1>
      </div>
      <div
        className={
          "border border-red-600 flex align-middle items-center justify-around"
        }
      >
        <Button
          className={"text-white w-[75%] bg-green-500 rounded-[10px] p-2"}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
