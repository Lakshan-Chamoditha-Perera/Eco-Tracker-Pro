import {Button} from "@nextui-org/react";
import Image from "../../assets/services1.jpg";
const ServiceItemCard = () => {
    return (
        <div
        className="my-[50px] border  flex flex-col justify-around items-center hover:scale-105 hover:bg-green-100 transition duration-300 delay-50 rounded-[20px] h-[400px] w-[300px]">
        <div className="flex flex-col justify-around items-center h-[70%] w-[90%]">
            <img className={'object-fit rounded-[10px]  border h-[50%] w-full'} src={Image}/>
            <div>
                <h1 className={'text-xl'}>
                    Service Name
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, harum mollitia nam necessitatibus porro.
                </p>
                <h1>
                    Rs.1000.00
                </h1>
            </div>
        </div>
        <div className={'w-[60%] h-[15%] border'}>
            <Button className={'w-full h-full text-[20px] bold text-white'} color={'success'}>Book</Button>
        </div>
    </div>)
}

export default ServiceItemCard;

