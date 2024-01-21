import FeedbackAccordion from "../../../../components/accordion/FeedbackAccordion.tsx";
import {Button} from "@nextui-org/react";

const ManageFeedbacks = () => {
    return (<div className={'flex w-0.8 justify-evenly p-2 min-h-[300px] flex-col border'}>
        <div className={"border"}>
            <h1 className={'text-5xl font-medium mb-3 text-green-500'}>
                Review & Feedbacks
            </h1>
            <p className={'text-xl font-medium mb-3 text-green-500'}>
                Give your feedbacks here.
            </p>
            <form className={'flex flex-col min-h-[200px] border-2 border-red-400 px-10 items-center'}>
                <div className={'w-full my-[10px] text-[20px]'}>
                    <h1>
                        Comment ID : <span>C000001</span>
                    </h1>
                </div>
                <div className={'w-full my-[10px] text-[20px]'}>
                    {/*dropdown*/}
                    <select className={' rounded-[10px] w-[25%] h-[50px]'} required>
                        <option value="" disabled selected hidden>Choose service</option>
                        <option value="1">Service S001</option>
                        <option value="2">Service S002</option>
                    </select>
                </div>
                <textarea className={'custom-textarea my-[10px] col-span-4 h-full'}
                          placeholder="Write your comment here..." required/>
                <div className={'w-full flex-col my-[10px] flex justify-end items-end text-[20px] border'}>
                    <Button color={'success'}>Submit</Button>
                </div>
            </form>

        </div>
        <div className={'flex mt-8 flex-col'}>
            <FeedbackAccordion/>
            <FeedbackAccordion/>
            <FeedbackAccordion/>
            <FeedbackAccordion/>
            <FeedbackAccordion/>
            <FeedbackAccordion/>

        </div>
    </div>)
}
export default ManageFeedbacks;