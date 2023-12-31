import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {useState} from "react";
// @ts-ignore
const ItemCard = ({element}) => {
    const [item] = useState(element);
    const handleButtonClick = () => {
        // Perform actions here when the button is clicked
        console.log(item);
    };
    return (<Card shadow="sm" className={"m-3"} isPressable onPress={handleButtonClick}>
        <CardBody className="overflow-visible p-0">
            <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
            />
        </CardBody>
        <CardFooter className="text-small  justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
            <br/>
            <button
                className={'bg-green-500 text-white p-2 rounded-md'}
            >Click
            </button>
        </CardFooter>
    </Card>);
}

export default ItemCard;