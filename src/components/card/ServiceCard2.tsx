import { useState } from "react";

const ServiceCard2 = (props: any) => {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [status, setStatus] = useState(props.status);
  const [img_url, setImgUrl] = useState(props.img_url);
  const [id, setId] = useState(props.id);
  const [remarks, setRemarks] = useState(props.remarks);
  const [availability, setAvailability] = useState(props.availability);
  const [service_id, setService_id] = useState<string>(props.service_id);

  return (
    <div className="flex flex-col justify-around items-center hover:scale-105 hover:bg-green-100 transition duration-300 delay-50 rounded-[20px] h-[350px] w-[300px]">
      <div className="flex flex-col justify-around items-center h-[80%] w-[90%]">
        <img
          className="object-cover rounded-[10px] border h-[50%] w-full"
          src={img_url}
          alt={`Service Image: ${name}`}
        />
        <div className="border">
          <h1 className="text-xl">{name}</h1>
          <p>{description}</p>
          <h1>{price}</h1>
          <h1>{status}</h1>
          <h1>{remarks}</h1>
          <h1>{availability}</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
