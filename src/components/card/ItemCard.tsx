import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {useState} from "react";

// @ts-ignore
const ItemCard = ({element}) => {
    const [item] = useState(element);
    const handleButtonClick = () => {
        console.log(item);
    };
    return (<Card shadow="sm" className={"m-3 hover:bg-[#EAF5F1] transition duration-1000 ease-in-out "} isPressable onPress={handleButtonClick}>
        <CardBody className="overflow-visible mb-2 p-0">
            <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[200px]"
                src={'src/assets/Eco Track Pro Logo.png'}
            />
        </CardBody>
        <CardFooter className="text-small flex flex-col pb-5 justify-between">
            <b className={'text-[18px]'}>{item.title}</b>
            <br/>
            <p className="text-default-500 text-[20px]">${item.price}</p>
            <br/>
        </CardFooter>

    </Card>);
}
export default ItemCard;