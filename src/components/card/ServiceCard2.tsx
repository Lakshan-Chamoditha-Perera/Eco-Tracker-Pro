import { useState } from "react";
import Image from "../../assets/services1.jpg";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";

const ServiceCard2 = (props: any) => {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [status, setStatus] = useState(props.status);
  const [Image, setImage] = useState(props.Image);
  const [id, setId] = useState(props.id);
  const [service_id, setService_id] = useState(props.service_id);

  return (
    <div className="my-[20px] border  flex flex-col justify-around items-center hover:scale-105 hover:bg-green-100 transition duration-300 delay-50 rounded-[20px] h-[400px] w-[300px]">
      <div className="flex flex-col justify-around items-center h-[90%] w-[90%]">
        <img
          className={"object-fit rounded-[10px]  border h-[50%] w-full"}
          src={Image}
        />
        <div className={"border "}>
          <h1 className={"text-xl "}>{name}</h1>
          <p>{description}</p>
          <h1>{price}</h1>
          <h1>{status}</h1>
        </div>
      </div>
      <div
        className={" border flex w-[90%] h-[10%] flex-row px-2 justify-end "}
      >
        <div className={"flex flex-row border"}>
          <Button
            className={"w-full h-full text-[15px] bold text-white"}
            color={"warning"}
            onClick={() => {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this !",
                icon: "warning",
                confirmButtonColor: "#0FAF72",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                    deleteService(id)
                }
              });
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

async function deleteService(id: any) {
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    };
    await fetch(
        `https://api.woofics.com/api/service/${id}`,
        requestOptions
    )
        .then(async (response) => {
        const data = await response.json();
        if (response.status == 200) {
            Swal.fire({
            icon: "success",
            title: "Your Service has been deleted",
            showConfirmButton: false,
            timer: 1500,
            });
            window.location.reload();
        } else {
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            });
        }
        })
        .catch((error) => {
        console.error(error);
        });
}

export default ServiceCard2;
