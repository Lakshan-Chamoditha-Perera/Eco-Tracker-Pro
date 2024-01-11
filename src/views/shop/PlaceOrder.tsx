import ItemCard from "../../components/card/ItemCard.tsx";
import TextField from "../../components/input/TextField.tsx";
import {Button} from "@nextui-org/react";

const PlaceOrder = () => {
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
    return (
        <div className={'flex w-0.8 justify-evenly p-2 min-h-[300px] flex-col border'}>
        <div className={"border"}>
            <h1 className={'text-5xl font-medium mb-3 text-green-500'}>Online Shop</h1>
            <p className={'text-xl font-medium mb-3 text-green-500'}>Order your eco-friendly products here.</p>
            <div
                className={'grid grid-cols-4 grid-rows-10 gap-5 min-h-[300px] border-2 border-red-400 justify-between p-10 items-center'}>
                <div
                    className={'col-span-4 row-span-1 border-2 text-3xl border-blue-500 justify-between items-center h-full'}> Cart
                </div>
                <div
                    className={'col-span-3 row-span-9 border-2 border-amber-500 justify-between items-center h-full'}>
                    <table className={'w-full h-full border'}>
                        <thead className={'border h-[50px]'}>
                        <tr className={'border'}>
                            <th className={'border'}>Item</th>
                            <th className={'border'}>Description</th>
                            <th className={'border'}>Quantity</th>
                            <th className={'border'}>Price</th>
                            <th className={'border'}>Option</th>
                        </tr>
                        </thead>
                        <tbody className={'border'}></tbody>
                    </table>

                </div>
                <div className={'row-span-3 p-3 border-2 border-green-950 justify-between items-center h-full'}>
                    <h1 className={'text-[20px]'}>
                        Total Price
                    </h1>
                    <h1 className={'text-5xl p-3 border font-medium text-green-500'}>Rs.1000.00</h1>
                </div>
                <div className={'row-span-6 p-3 border-2 border-green-950 justify-between items-center h-full'}>
                    <h1 className={'text-[20px]'}>
                        Payment Amount
                    </h1>
                    <TextField
                        label="Payment"
                        placeholder="1000.00"
                        type="text"
                        isRequired={true}
                        color={'success'}
                    />
                    <Button color={'success'}>Pay</Button>
                </div>
            </div>
        </div>

        <div className={'flex mt-8 flex-col'}>
            <h1 className={'text-5xl font-medium mb-3 text-green-500'}>Shop Items</h1>
            <ul className={'grid grid-cols-6 border gap-4'}>
                {list.map((item, index) => (<ItemCard key={index} element={item}/>))}
            </ul>
        </div>
    </div>)

}

export default PlaceOrder;


