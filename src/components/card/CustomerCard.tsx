import {useState} from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

interface Customer {
    id: string,
    fname: string,
    lname:string,
    address: string,
    mobile: string,
    email: string,
    nic_number: string,
    nic_photo_front: Buffer,
    nic_photo_back: Buffer,
    img_bill: Buffer,
    city: string,
    postal_code: string
    date : Date
}
// customer array//

let customers: Customer[] = [{
    id: "1",
    fname: "John",
    lname:"Doe",
    address: "No 1, Main Street, Colombo 07",
    mobile: "0771234567",
    email: "",
    nic_number: "123456789V",
    nic_photo_front: Buffer.from(""),
    nic_photo_back: Buffer.from(""),
    img_bill: Buffer.from(""),
    city: "Colombo",
    postal_code: "00700",
    date : new Date()
}]

const CustomerCard = ({element}) => {
    const [customer,setCustomer] = useState(element);
    const handleButtonClick = () => {

    };
    return (<Card shadow="sm" className={"m-3 hover:bg-[#EAF5F1] transition duration-1000 ease-in-out "} isPressable onPress={handleButtonClick}>
        <CardBody className="overflow-visible mb-2 p-0">
            <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={customer.id}
                className="w-full object-cover h-[200px]"
                src={'src/assets/Eco Track Pro Logo.png'}
            />
        </CardBody>
        <CardFooter className="text-small flex flex-col pb-5 justify-between">
            <b className={'text-[18px]'}>{customer.name}</b>
          </CardFooter>

    </Card>);
}
export default CustomerCard;