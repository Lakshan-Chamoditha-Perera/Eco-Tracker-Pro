import TextField from "../../../../components/input/TextField.tsx";
import {Button} from "@nextui-org/react";

const ManagePersonalDetails = () => {
    return (<section>
        <header className={'flex flex-row pt-[20px] rounded-[20px]'}>

            <h1 className={'text-5xl font-medium mb-5 text-green-500'}>Manage Registration Details</h1>
        </header>
        <section className={'flex flex-col mt-[20px] p-[10px] border items-center rounded-[20px]'}>

            <div className={'w-[90%]'}>
                <h2 className={'text-[20px] font-medium text-[#004B50]'}>Personal Information</h2>
                <form className={'p-[20px] grid bg-white grid-rows-10 gap-5 grid-cols-2'}>
                    <div className={'flex justify-end'}>
                        <TextField
                            label="First Name"
                            placeholder="Lakshan "
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex justify-end'}>
                        <TextField
                            label="Last Name"
                            placeholder="Chamoditha"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex justify-end'}>
                        <TextField
                            label="Nic / Passport No"
                            placeholder="201254873548"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'grid grid-cols-2 gap-5'}>

                        <TextField
                            label="Mobile number 1"
                            placeholder="201254873548"
                            type=""
                            isRequired={true}
                            color={'success'}
                        />
                        <TextField
                            label="Mobile number 2"
                            placeholder="201254873548"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'grid grid-cols-2 gap-5'}>
                        <TextField
                            label="Family menbers count"
                            placeholder="2"
                            type="number"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'grid col-span-2 row-span-8 grid-cols-3 grid-rows-5 gap-5'}>
                        <div className={'row-span-5 flex-col flex items-center'}>
                        <span className={'flex items-start px-2 w-full text-[12px]'}>
                            Upload NIC / Passport
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
                            Upload NIC / Passport
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
                            Water / Electricity Bill
                        </span>
                            <TextField
                                type="file"
                                isRequired={true}
                                color={'success'}
                            />
                            <img className={'border-2 my-5 rounded-[20px] w-3/4 h-full'}/>
                        </div>
                    </div>
                </form>
            </div>
            <div className={'w-[90%]'}>
                <h2 className={'text-[20px] font-medium text-[#004B50]'}>Address</h2>
                <form className={'p-[20px]  grid bg-white grid-rows-2 gap-5 grid-cols-2'}>

                    <div className={'flex justify-end'}>
                        <TextField
                            label="Address Line 1"
                            placeholder="No.45"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex justify-end'}>
                        <TextField
                            label="Address Line 2"
                            placeholder="River Avenue"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'flex  justify-end'}>
                        <TextField
                            label="City"
                            placeholder="Colombo"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                    <div className={'grid grid-cols-2 gap-5'}>
                        <TextField
                            label="Province"
                            placeholder="201254873548"
                            type=""
                            isRequired={true}
                            color={'success'}
                        />
                        <TextField
                            label="Postal Code"
                            placeholder="201254873548"
                            type="text"
                            isRequired={true}
                            color={'success'}
                        />
                    </div>
                </form>
            </div>
            <div className={'w-[90%] h-[80px] flex-row flex border  pr-[20px] justify-end'}>
                <Button
                    className={'bg-[#0FAF72] hover:shadow-l w-[20%] h-[60%]  text-white font-medium rounded-[20px] py-[10px] hover:bg-green-400'}>
                    Submit
                </Button>
            </div>
        </section>
    </section>)

}
export default ManagePersonalDetails;