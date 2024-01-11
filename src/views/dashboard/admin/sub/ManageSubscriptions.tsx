import TextField from "../../../../components/input/TextField.tsx";
import {Button} from "@nextui-org/react";
import SubscriptionCard from "../../../../components/card/SubscriptionCard.tsx";

const ManageSubscriptions = () => {
    return (
        <div>
        <div className={'flex w-0.8 justify-evenly p-2 min-h-[100px] flex-col border'}>
            <h1 className={'text-5xl font-medium mb-5 text-green-500'}>Manage Subscriptions</h1>
        </div>


        <section className={'flex flex-col mt-[50px] border p-[20px] rounded-[20px]'}>
            <h2 className={'text-[20px] font-medium text-[#004B50]'}>Manage Package</h2>
            <form
                className={' border border-red-600  border-2px w-[100%] grid bg-white grid-cols-8'}>
                <div className={'col-span-6 border border-blue-400 p-3'}>
                    <div className={'flex p-1  border justify-end col-span-2'}>
                        <TextField
                            label="Package ID"
                            placeholder="S001"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex  p-1 justify-end col-span-2'}>
                        <TextField
                            label="Name"
                            placeholder="Service 1"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex  p-1 justify-end col-span-2'}>
                        <TextField
                            label="Description"
                            placeholder="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex p-1  justify-end col-span-2'}>
                        <TextField
                            label="Price Per day"
                            placeholder="49.99"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex  p-1 justify-end col-span-2'}>
                        <TextField
                            label="Price Per day"
                            placeholder="49.99"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex  p-1 justify-end col-span-2'}>
                        <TextField
                            label="Price Per day"
                            placeholder="49.99"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                </div>
                <div className={'col-span-2 border-red-600 border p-3'}>
                    <div className={'grid grid-rows-6 '}>
                        <div className={'flex-col p-1 flex items-center'}>
                            <TextField
                                type="file"
                                isRequired={true}
                                color={'success'}
                            />
                        </div>
                        <img className={'border-2  border-red-800 row-span-5 rounded-[10px] w-[100%] h-[100%] '}/>
                    </div>
                </div>
            </form>
            <div className={'flex flex-row justify-end p-2'}>
                <Button className={'bg-green-500 text-white rounded-[10px] p-2 m-2'}>Save</Button>
                <Button className={'bg-yellow-500 text-white rounded-[10px] p-2 m-2'}>Update</Button>
                <Button className={'bg-red-500 text-white rounded-[10px] p-2 m-2'}>Delete</Button>
            </div>
            {/*button section (save update delete)*/}


        </section>
        <section className={'flex flex-col mt-[50px] border p-[20px] rounded-[20px]'}>
            <h1 className={'mb-3'}>OnGoing Packages</h1>
            <div className={'grid grid-cols-3 p-5 gap-5 w-full border min-h-[250px] justify-between'}>
                <SubscriptionCard/>
                <SubscriptionCard/>
                <SubscriptionCard/>
                <SubscriptionCard/>
                <SubscriptionCard/>
                <SubscriptionCard/>
            </div>
        </section>
    </div>)
}

export default ManageSubscriptions