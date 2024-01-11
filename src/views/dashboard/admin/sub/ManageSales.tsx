import TextField from "../../../../components/input/TextField.tsx";
import {Button} from "@nextui-org/react";
import ItemCard from "../../../../components/card/ItemCard.tsx";

const ManageSales = () => {
    let list = [{
        id: 1,
        title: "Eco-Friendly Bamboo Toothbrush",
        description: "This bamboo toothbrush is a great alternative to plastic toothbrushes that usually end up in landfills or oceans. By making the switch you will help to protect and preserve our beautiful planet from plastic pollution. Quit plastic, brush sustainable!",
        price: 5.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71W%2BZr3OxXL._AC_SL1500_.jpg"
    }, {
        id: 2,
        title: "Reusable Produce Bags",
        description: "Reusable Produce Bags are made of premium quality mesh polyester, which is lightweight but super strong. The reusable produce bags are mesh, so the cashier will be able to clearly see the item's barcode and reduce the hassle of checkout.",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71RQXq%2B9M%2BL._AC_SL1500_.jpg"
    }, {
        id: 3,
        title: "Reusable Sandwich Bags",
        description: "Reusable sandwich bags are made of food-grade PEVA material, PVC-free, lead-free, chloride-free and BPA FREE. One reusable bag can save up to 350 + disposable bags, not only will change the way you store, cook and even eat but also can save your money and save the planet.",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71q0Yb3%2B%2B%2BL._AC_SL1500_.jpg"
    }, {
        id: 4,
        title: "Reusable Snack Bags",
        description: "Reusable snack bags are made of food-grade PEVA material, PVC-free, lead-free, chloride-free and BPA FREE. One reusable bag can save up to 350 + disposable bags, not only will change the way you store, cook and even eat but also can save your money and save the planet.",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71q0Yb3%2B%2B%2BL._AC_SL1500_.jpg"
    }, {
        id: 1,
        title: "Eco-Friendly Bamboo Toothbrush",
        description: "This bamboo toothbrush is a great alternative to plastic toothbrushes that usually end up in landfills or oceans. By making the switch you will help to protect and preserve our beautiful planet from plastic pollution. Quit plastic, brush sustainable!",
        price: 5.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71W%2BZr3OxXL._AC_SL1500_.jpg"
    }, {
        id: 2,
        title: "Reusable Produce Bags",
        description: "Reusable Produce Bags are made of premium quality mesh polyester, which is lightweight but super strong. The reusable produce bags are mesh, so the cashier will be able to clearly see the item's barcode and reduce the hassle of checkout.",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71RQXq%2B9M%2BL._AC_SL1500_.jpg"
    }, {
        id: 3,
        title: "Reusable Sandwich Bags",
        description: "Reusable sandwich bags are made of food-grade PEVA material, PVC-free, lead-free, chloride-free and BPA FREE. One reusable bag can save up to 350 + disposable bags, not only will change the way you store, cook and even eat but also can save your money and save the planet.",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71q0Yb3%2B%2B%2BL._AC_SL1500_.jpg"
    }, {
        id: 4,
        title: "Reusable Snack Bags",
        description: "Reusable snack bags are made of food-grade PEVA material, PVC-free, lead-free, chloride-free and BPA FREE. One reusable bag can save up to 350 + disposable bags, not only will change the way you store, cook and even eat but also can save your money and save the planet.",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71q0Yb3%2B%2B%2BL._AC_SL1500_.jpg"
    },

    ];
    return (<div>
            <div className={'flex w-0.8 justify-evenly p-2 min-h-[100px] flex-col border'}>
                <h1 className={'text-5xl font-medium mb-5 text-green-500'}>Manage Sales</h1>
            </div>
            <section className={'flex flex-col mt-[50px] border p-[20px] rounded-[20px]'}>
                <h2 className={'text-[20px] font-medium text-[#004B50]'}>Manage Items</h2>
                <form
                    className={' border border-red-600  border-2px w-[100%] grid bg-white grid-cols-8'}>
                    <div className={'col-span-6 border border-blue-400 p-3'}>
                        <div className={'flex p-1  border justify-end col-span-2'}>
                            <TextField
                                label="Item Code"
                                placeholder="I0001"
                                type="text"
                                isRequired={true}
                                color={'success'}
                            />
                        </div>
                        <div className={'flex  p-1 justify-end col-span-2'}>
                            <TextField
                                label="Description"
                                placeholder="Item 1"
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
                                label="Price "
                                placeholder="49.99"
                                type="text"
                                isRequired={true}
                                color={'success'}
                            />
                        </div>
                        <div className={'flex  p-1 justify-end col-span-2'}>
                            <TextField
                                label="Qty"
                                placeholder="10"
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
                <h1 className={'text-[20px] font-medium text-[#004B50]'}>Listed Items</h1>
                <div className={'grid grid-cols-5 p-5 gap-5 w-full border min-h-[250px] justify-between'}>
                    {list.map((item, index) => (<ItemCard key={index} element={item}/>))}
                </div>
            </section>
        </div>)
}
export default ManageSales