import TextField from "../../../../components/input/TextField.tsx";
import {Button} from "@nextui-org/react";

const ManageCustomers = () => {
    return (<div>
        <div className={'flex w-0.8 justify-evenly p-2 min-h-[300px] flex-col border'}>
            <h1 className={'text-5xl font-medium mb-5 text-green-500'}>Manage Customers</h1>
            {/**/}
            {/*grid grid-cols-4 border gap-4*/}
            {/*{
                    services.map((service, index) => (
                        <li className={'w-full'}>
                            <ServiceCard1 key={index} title={service.title} content={service.content}
                                         img_url={service.img_url}/>
                        </li>
                    ))
                }*/}

            <ul className={'flex flex-row w-full max-h-fit justify-between overflow-y-scroll'}>
                {/*{services.map(() => (<li className={'mx-[20px]'}>*/}
                {/*    <ServiceCard2/>*/}
                {/*</li>))}*/}
            </ul>

        </div>

        <section className={'flex flex-col mt-[50px] border p-[20px] rounded-[20px]'}>
            <h2 className={'text-[20px] font-medium text-[#004B50]'}>Manage Services</h2>

            <form className={'p-[20px] border w-[80%] grid bg-white grid-rows-8 gap-5 '}>
                <div className={'flex justify-end'}>
                    <TextField
                        label="Service ID"
                        placeholder="S001"
                        type="text"
                        isRequired={true}
                        color={'success'}
                    />
                </div>
                <div className={'flex justify-end'}>
                    <TextField
                        label="Name"
                        placeholder="Service 1"
                        type="text"
                        isRequired={true}
                        color={'success'}
                    />
                </div>
                <div className={'flex justify-end'}>
                    <TextField
                        label="Description"
                        placeholder="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium"
                        type="text"
                        isRequired={true}
                        color={'success'}
                    />
                </div>
                <div className={'flex justify-end'}>
                    <TextField
                        label="Price Per day"
                        placeholder="49.99"
                        type="text"
                        isRequired={true}
                        color={'success'}
                    />
                </div>

                <div className={'grid grid-cols-2 border row-span-4 gap-5'}>
                    <div className={'grid col-span-2 row-span-8 grid-cols-2 grid-rows-5 gap-5'}>
                        <div className={'row-span-5 flex-col flex items-center'}>
                        <span className={'flex items-start px-2 w-full text-[12px]'}>
                        </span>
                            <TextField
                                type="file"
                                isRequired={true}
                                color={'success'}
                            />
                            <img className={'border-2 my-5 rounded-[20px] w-3/4 h-full'}/>
                        </div>
                        <div className={'row-span-5 flex-col flex items-center'}>
                        <span className={'flex items-start px-2 w-full text-[12px]'}>
                        </span>
                            <TextField
                                type="file"
                                isRequired={true}
                                color={'success'}
                            />
                            <img className={'border-2 my-5 rounded-[20px] w-3/4 h-full'}/>
                        </div>
                    </div>
                </div>
            </form>

            <div className={'w-[80%] h-[80px] border flex-row  flex px-5 justify-end'}>
                <Button
                    className={'bg-[#0FAF72] mr-2 hover:shadow-l w-[10%] h-[60%]  text-white font-medium rounded-[20px] py-[10px] hover:bg-green-400'}>
                    Save
                </Button>
                <Button
                    className={'bg-[#0FAF72] mr-2  hover:shadow-l w-[10%] h-[60%]  text-white font-medium rounded-[20px] py-[10px] hover:bg-green-400'}>
                    Delete
                </Button>
                <Button
                    className={'bg-[#0FAF72] hover:shadow-l w-[10%] h-[60%]  text-white font-medium rounded-[20px] py-[10px] hover:bg-green-400'}>
                    Update
                </Button>
            </div>
        </section>
    </div>)
}


export default ManageCustomers;