import ServiceItemCard from "../../../components/card/ServiceItemCard.tsx";
import TextField from "../../../components/input/TextField.tsx";
import {Button} from "@nextui-org/react";

const Booking = () => {
    return (
        <div>
            <div className={'flex w-0.8 p-3 justify-evenly min-h-[500px] flex-col border'}>
                <h1 className={'text-5xl font-medium text-green-500'}>Services</h1>
                <div
                    className={'w-0.8 p-3 justify-evenly min-h-[400px] grid grid-cols-4 grid-rows-6 gap-2 border-red-600 border'}>
                    <div className={'col-span-3 row-span-6 border'}>

                    </div>

                    <div className={'border grid grid-rows-3 row-span-2'}>
                        <h1 className={'border text-2xl font-medium text-green-500'}>
                            Pending Services
                        </h1>
                        <h1 className={'border flex flex-col items-end border-red-600 justify-around text-8xl row-span-2 '}>
                            02
                        </h1>
                    </div>
                    <div className={'border grid grid-rows-3 row-span-2'}>
                        <h1 className={'border text-2xl font-medium text-green-500'}>
                            Completed Services
                        </h1>
                        <h1 className={'border flex flex-col items-end border-red-600 justify-around text-8xl row-span-2 '}>
                            19
                        </h1>
                    </div>
                    <div className={'border grid grid-rows-3 row-span-2'}>
                        <h1 className={'border text-2xl font-medium text-green-500'}>
                            Cancelled Services
                        </h1>
                        <h1 className={'border flex flex-col items-end border-red-600 justify-around text-8xl row-span-2 '}>
                            01
                        </h1>
                    </div>


                </div>
            </div>


            <div className={'flex w-0.8 p-3 justify-evenly min-h-[300px] flex-col border'}>
                <h1 className={'text-5xl font-medium text-green-500'}>Booked Services</h1>
                <div className={'flex w-0.8 p-3 justify-evenly min-h-[300px] flex-col border'}>
                    {/*    table*/}
                    <table className={'w-full h-full border '}>
                        <thead className={'border h-[50px] '}>
                        <tr className={'border'}>
                            <th className={'border'}>Date</th>
                            <th className={'border'}>Service</th>
                            <th className={'border'}>Total</th>
                            <th className={'border'}>Status</th>
                            <th className={'border w-[20%]'}>Review</th>
                            <th className={'border w-[10%]'}>Opt</th>
                        </tr>
                        </thead>
                        <tbody className={'border'}>
                        <tr className={'border'}>
                            <td className={'border'}>2021-09-09</td>
                            <td className={'border'}>Service Name</td>
                            <td className={'border'}>Rs.1000.00</td>
                            <td className={'border'}>Completed</td>
                            <td className={'border  w-[20%]'}>
                                <TextField/>
                            </td>
                            <td className={'flex flex-row justify-around align-middle p-2'}>
                                <Button className={'text-white bg-green-500 rounded-[10px] p-2'}>Submit</Button>
                                <Button className={'text-white bg-red-500 rounded-[10px] p-2'}>Cancel</Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className={'flex w-0.8 justify-evenly p-2 min-h-[300px] flex-col border'}>
                <h1 className={'text-5xl font-medium mb-5 text-green-500'}>Book Services</h1>

                <div className={'flex w-[20%] border-red border flex-row justify-between pt-2 items-center'}>
                    <h1 className={'text-2xl font-medium text-green-500'}>Select Date</h1>
                    <input type={'date'} className={'border border-green-100 rounded-[10px] p-2'}/>
                </div>

                <ul className={'flex flex-row w-full max-h-fit justify-between overflow-y-scroll'}>
                    <li className={'mx-[20px]'}><ServiceItemCard/></li>
                    <li className={'mx-[20px]'}><ServiceItemCard/></li>
                    <li className={'mx-[20px]'}><ServiceItemCard/></li>
                    <li className={'mx-[20px]'}><ServiceItemCard/></li>
                    <li className={'mx-[20px]'}><ServiceItemCard/></li>
                </ul>
            </div>
        </div>
    )
}

export default Booking