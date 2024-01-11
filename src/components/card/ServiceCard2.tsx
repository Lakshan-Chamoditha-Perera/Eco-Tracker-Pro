import Image from "../../assets/services1.jpg";
import {Button} from "@nextui-org/react";

const ServiceCard2 = () => {
    return (
        <div className="my-[20px] border  flex flex-col justify-around items-center hover:scale-105 hover:bg-green-100 transition duration-300 delay-50 rounded-[20px] h-[400px] w-[300px]">
            <div className="flex flex-col justify-around items-center h-[90%] w-[90%]">
                <img className={'object-fit rounded-[10px]  border h-[50%] w-full'} src={Image}/>
                <div className={'border '}>
                    <h1 className={'text-xl '}>
                        Service Name
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, harum mollitia nam necessitatibus porro.
                    </p>
                    <h1>
                        Rs.1000.00
                    </h1>
                    <h1>
                        Available
                    </h1>
                </div>
            </div>
            <div className={' border flex w-[90%] h-[10%] flex-row px-2 justify-end '}>
                <div className={'flex flex-row border'}>
                    <Button className={'w-full h-full text-[15px] bold text-white'} color={'warning'} >Edit</Button>
                </div>
            </div>
        </div>)
};

export default ServiceCard2;
