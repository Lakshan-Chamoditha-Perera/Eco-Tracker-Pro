import {Accordion, AccordionItem, Button} from "@nextui-org/react";

const FeedbackAccordion = () => {
    return (<Accordion variant={'splitted'} className={'w-full'}>
        <AccordionItem  className={'m-2 p-4 rounded-[20px] bg-[#F8FBFB]'}
                       title="Title">
            <div className={'grid grid-cols-3 border w-full'}>
                <h1 className={'col-span-2 text-[20px] text-green-500'}>
                    Lorem ipsum dolor sit amet
                </h1>
                <p className={'border flex flex-row justify-end text-[20px] p-2'}>
                    2021/10/10
                </p>
                <p className={'col-span-3 text-[20px] text-green-500'}>
                    <strong className={'col-span-3 text-[20px] text-green-500'}>
                        Comment
                    </strong>
                    lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis
                    distinctio doloremque, fuga hic ipsum itaque minus neque nisi perferendis possimus qui ratione rem
                    repudiandae sed soluta sunt suscipit temporibus! amet, consectetur adipiscing elit. Nulla nec purus
                    feugiat, molestie
                </p>
                <div></div>
                <div></div>
                <div className={'flex justify-end gap-2 p-2 border'}>
                    <Button className={'w-[20%]'} color={'success'}>Update</Button>
                    <Button className={'w-[20%]'} color={'warning'}>Delete</Button>
                </div>
            </div>
        </AccordionItem>
    </Accordion>);
}

export default FeedbackAccordion;