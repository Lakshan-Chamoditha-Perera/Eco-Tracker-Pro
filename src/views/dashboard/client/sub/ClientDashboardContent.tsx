import {FaTrash} from "react-icons/fa";
import {FcMoneyTransfer, FcPackage} from "react-icons/fc";

const ClientDashboardContent = () => {
    return (<>
        <div className={'w-0.8 h-[400px] justify-evenly p-2 grid grid-rows-4 grid-cols-3 gap-5'}>
            <header
                className={'flex flex-row bg-white drop-shadow-l shadow-lg p-2 col-span-2 row-span-4 h-full rounded-[20px] border-green-950 '}>
                <div className={'p-5 border-2 w-[60%]'}>
                    <h2 className={'text-3xl mb-7  font-medium text-[#0FAF72]'}>
                        Welcome Back!
                    </h2>
                    <p className={'text-[20px]'}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                        molestie
                    </p>
                </div>
                <img className={'object-contain p-5'} src={'src/assets/img_client1.png'} alt={'profile'}/>
            </header>
            <div className={'flex flex-col row-span-4 items-center justify-around rounded-[20px] shadow-lg p-3'}>
                <h1 className={'text-2xl border w-full font-medium text-green-500'}>Subscription Details</h1>
                <div className={'border rounded-[10px]  flex flex-col h-[80%] w-[50%]'}>
                    <img className={'object-contain border h-[50%] w-full'} src={'src/assets/img_client2.png'}/>
                    <h1>
                        Monthly Package
                    </h1>
                    <h1>
                        $49.99
                    </h1>
                    <h1>
                        Activated till 2021/10/10
                    </h1>
                </div>
            </div>
        </div>
        <div className={'flex w-0.8 justify-evenly  min-h-[300px] flex-col'}>
            <ul className={'grid grid-cols-3 gap-5 h-[300px] py-[40px] mb-[10px] justify-evenly'}>
                <li className={'shadow-lg bg-white rounded-[20px] grid  gap-3 grid-cols-3 grid-rows-3'}>
                    <div className={'col-span-2 flex-col flex items-center justify-around bg-green-500 rounded-[10px]'}>
                        <h1 className={'text-2xl font-medium flex items-center justify-around text-white'}>Monthly Wastage</h1>
                    </div>
                    <div className={'col-span-3 row-span-2 flex flex-row items-center justify-between'}>
                        <h1 className={'ml-5 text-6xl font-medium text-green-500'}>20kg</h1>
                        <div className={'w-[150px] text-gray-300 flex items-center justify-around h-[150px]'}>
                            <FaTrash className={'text-7xl'}/>
                        </div>
                    </div>
                </li>

                <li className={'shadow-lg bg-white rounded-[20px] grid gap-3 grid-cols-3 grid-rows-3'}>
                    <div className={'col-span-2 flex-col flex items-center justify-around bg-green-700 rounded-[10px]'}>
                        <h1 className={'text-2xl font-medium flex items-center justify-around text-white'}>Total Spent</h1>
                    </div>
                    <div className={'col-span-3 row-span-2 flex flex-row items-center justify-between'}>
                        <h1 className={'ml-5 text-6xl font-medium text-green-500'}>Rs.1000.00</h1>

                        <div className={'w-[150px] flex items-center justify-around h-[150px]'}>
                            <FcMoneyTransfer className={'text-7xl'}/>
                        </div>
                    </div>
                </li>
                <li className={'shadow-lg bg-white rounded-[20px] grid  gap-3 grid-cols-3 grid-rows-3'}>
                    <div className={'col-span-2 shadow-lg flex-col flex items-center justify-around bg-green-800 rounded-[10px]'}>
                        <h1 className={'text-2xl font-medium flex items-center justify-around text-white'}>Total
                            Collected</h1>
                    </div>
                    <div className={'col-span-3 row-span-2 flex flex-row items-center justify-between'}>
                        <h1 className={'ml-5 text-6xl font-medium text-green-500'}>20 packs</h1>
                        <div className={'w-[150px] flex items-center justify-around h-[150px]'}>
                            <FcPackage className={'text-7xl'}/>
                        </div>

                    </div>
                </li>
            </ul>
            <div className={'grid grid-cols-4 grid-rows-7 h-[500px] gap-5 py-[40px] mb-[10px] justify-evenly'}>
                <div
                    className={'col-span-3 row-span-7 flex flex-col bg-white items-center justify-between  rounded-[20px] shadow-lg p-3'}>
                    <h1 className={'text-2xl w-full font-medium text-green-500'}>Collection history</h1>
                    {/*    last collected days table*/}
                    <table className={'w-full h-full '}>
                        <thead className={' h-[50px]'}>
                        <tr className={'rounded'}>
                            <th className={'border rounded-[10px]'}>Date</th>
                            <th className={'border rounded-[10px]'}>No of Packs</th>
                            <th className={'border rounded-[10px]'}>Total</th>
                        </tr>
                        </thead>
                        <tbody className={'border'}></tbody>
                    </table>

                </div>
                <div
                    className={'col-span-1 bg-white row-span-7 flex flex-col items-center justify-between rounded-[20px] shadow-lg p-3'}>
                    <h1 className={'text-2xl w-full font-medium text-green-500'}>Booked Services</h1>
                    {/*    booked services list*/}
                    {// booked services
                    }
                </div>
            </div>
        </div>
    </>)
}

export default ClientDashboardContent;