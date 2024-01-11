import {Accordion, AccordionItem, Avatar, Button} from "@nextui-org/react";

const ServiceRequestAccordion = () => {
    // const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (<Accordion selectionMode="multiple">
        <AccordionItem
            key="1"
            aria-label="Chung Miller"
            startContent={<Avatar
                isBordered
                color="primary"
                radius="lg"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />}
            subtitle="test"
            title="Chung Miller">
            <div className={'grid grid-cols-3 p-2 w-full'}>
                <div className={'col-span-2 p-2 grid grid-cols-3 border text-[20px] text-green-500'}>
                    <h1 className={'border'}>
                        Booking ID
                    </h1>
                    <h1 className={'border col-span-2'}>
                        B001
                    </h1>
                </div>
                <div className={'col-span-2 p-2 grid grid-cols-3 border text-[20px] text-green-500'}>
                    <h1 className={'border'}>
                        Date & Time
                    </h1>
                    <h1 className={'border col-span-2'}>
                        2021/10/10
                    </h1>
                </div>
                <div className={'col-span-2 p-2 grid grid-cols-3 border text-[20px] text-green-500'}>
                    <h1 className={'border'}>
                        Date & Time
                    </h1>
                    <h1 className={'border col-span-2'}>
                        2021/10/10
                    </h1>
                </div>
                <div className={'col-span-2 p-2 grid grid-cols-3 border text-[20px] text-green-500'}>
                    <h1 className={'border'}>
                        Service
                    </h1>
                    <h1 className={'border col-span-2'}>

                    </h1>
                </div>
                {/*    buttons */}
                <div className={'col-span-3 flex justify-end gap-2 p-2'}>
                    <Button className={'w-[15%]'} color={'primary'}>Accept</Button>
                    <Button className={'w-[15%]'} color={'warning'}>Reject</Button>
                </div>
            </div>
        </AccordionItem>
    </Accordion>);
}

export default ServiceRequestAccordion;