import ItemCard from "../../components/card/ItemCard";

const OnlineShopItems = () => {
    // list with 20 items
    let list = [
        {
            id: 1,
            title: "Eco-Friendly Bamboo Toothbrush",
            description: "This bamboo toothbrush is a great alternative to plastic toothbrushes that usually end up in landfills or oceans. By making the switch you will help to protect and preserve our beautiful planet from plastic pollution. Quit plastic, brush sustainable!",
            price: 5.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/71W%2BZr3OxXL._AC_SL1500_.jpg"
        },
        {
            id: 2,
            title: "Reusable Produce Bags",
            description: "Reusable Produce Bags are made of premium quality mesh polyester, which is lightweight but super strong. The reusable produce bags are mesh, so the cashier will be able to clearly see the item's barcode and reduce the hassle of checkout.",
            price: 9.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/71RQXq%2B9M%2BL._AC_SL1500_.jpg"
        },
        {
            id: 3,
            title: "Reusable Sandwich Bags",
            description: "Reusable sandwich bags are made of food-grade PEVA material, PVC-free, lead-free, chloride-free and BPA FREE. One reusable bag can save up to 350 + disposable bags, not only will change the way you store, cook and even eat but also can save your money and save the planet.",
            price: 9.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/71q0Yb3%2B%2B%2BL._AC_SL1500_.jpg"
        },
        {
            id: 4,
            title: "Reusable Snack Bags",
            description: "Reusable snack bags are made of food-grade PEVA material, PVC-free, lead-free, chloride-free and BPA FREE. One reusable bag can save up to 350 + disposable bags, not only will change the way you store, cook and even eat but also can save your money and save the planet.",
            price: 9.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/71q0Yb3%2B%2B%2BL._AC_SL1500_.jpg"
        },
        {
            id: 1,
            title: "Eco-Friendly Bamboo Toothbrush",
            description: "This bamboo toothbrush is a great alternative to plastic toothbrushes that usually end up in landfills or oceans. By making the switch you will help to protect and preserve our beautiful planet from plastic pollution. Quit plastic, brush sustainable!",
            price: 5.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/71W%2BZr3OxXL._AC_SL1500_.jpg"
        },
        {
            id: 2,
            title: "Reusable Produce Bags",
            description: "Reusable Produce Bags are made of premium quality mesh polyester, which is lightweight but super strong. The reusable produce bags are mesh, so the cashier will be able to clearly see the item's barcode and reduce the hassle of checkout.",
            price: 9.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/71RQXq%2B9M%2BL._AC_SL1500_.jpg"
        },
        {
            id: 3,
            title: "Reusable Sandwich Bags",
            description: "Reusable sandwich bags are made of food-grade PEVA material, PVC-free, lead-free, chloride-free and BPA FREE. One reusable bag can save up to 350 + disposable bags, not only will change the way you store, cook and even eat but also can save your money and save the planet.",
            price: 9.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/71q0Yb3%2B%2B%2BL._AC_SL1500_.jpg"
        },
        {
            id: 4,
            title: "Reusable Snack Bags",
            description: "Reusable snack bags are made of food-grade PEVA material, PVC-free, lead-free, chloride-free and BPA FREE. One reusable bag can save up to 350 + disposable bags, not only will change the way you store, cook and even eat but also can save your money and save the planet.",
            price: 9.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/71q0Yb3%2B%2B%2BL._AC_SL1500_.jpg"
        },

    ];
    return (<section
            className={"my-[80px] min-h-[900px] bottom-0 h-auto px-[320px] flex flex-col align-middle "}>
            <div className={'flex flex-col items-start '}>
                <h2 className={'text-3xl font-medium text-[#0FAF72]'}>
                    ONLINE SHOP
                </h2>
                <h1 className={'text-center text-[48px] font-bold'}>
                    Cleanup Kit Essentials
                </h1>
            </div>
            <div  className=" grid grid-cols-4 px-20 pb-[40px]   sm:grid-cols-4 my-5 ">
                {list.map((item, index) => (
                    <ItemCard key={index} element={item}/>
                ))}
            </div>
        </section>);
}

export default OnlineShopItems;

//install axios -> npm i axios