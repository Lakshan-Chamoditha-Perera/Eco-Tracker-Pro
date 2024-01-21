import {Accordion, AccordionItem, Avatar, Button} from "@nextui-org/react";
import TextField from "../input/TextField.tsx";

const ComplainAccordion = () => {
    return (<Accordion variant={'splitted'} className={'w-full'}>
        <AccordionItem className={'m-2 p-2 rounded-[20px] bg-[#F8FBFB]'}
                       title="Title"
                       startContent={<Avatar
                           isBordered
                           color="success"
                           radius="lg"
                           src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                       />}
        >
            <div className={'grid grid-cols-3 p-2  w-full'}>
                <div className={'col-span-2 grid grid-cols-3 border p-2 text-[20px] text-green-500'}>
                    <h1 className={'border'}>
                        Customer
                    </h1>
                    <h1 className={'border col-span-2'}>
                        Lorem ipsum dolor sit amet</h1>
                </div>
                <div className={'col-span-2 p-2 grid grid-cols-3 border text-[20px] text-green-500'}>
                    <h1 className={'border'}>
                        Date
                    </h1>
                    <h1 className={'border col-span-2'}>
                        2021/10/10
                    </h1>
                </div>
                <div
                    className={'col-span-3 grid grid-cols-3 grid-rows-4 border-b-1 mb-4 pb-2 text-[20px] text-green-500'}>
                    <h1 className={'border'}>
                        Description
                    </h1>
                    <h1 className={'row-span-4 col-span-3'}>
                        lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                        debitis
                        distinctio doloremque, fuga hic ipsum itaque minus neque nisi perferendis possimus qui ratione
                        rem
                        repudiandae sed soluta sunt suscipit temporibus! amet, consectetur adipiscing elit. Nulla nec
                        purus
                        feugiat, molestie
                    </h1>
                </div>

                <div className={'col-span-3 '}>
                    <TextField
                        label="Reply"
                        placeholder="Reply"
                        type="text"
                        isRequired={true}
                        color={'success'}
                    />
                    <div className={'flex justify-end gap-2 p-2 '}>
                        <Button className={'w-[15%]'} color={'success'}>Done</Button>
                        <Button className={'w-[25%]'} color={'warning'}>Mark as solved</Button>
                    </div>
                </div>
            </div>
        </AccordionItem>
    </Accordion>);
}

export default ComplainAccordion;