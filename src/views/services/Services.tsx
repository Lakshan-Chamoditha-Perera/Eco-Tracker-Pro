import ServiceCard from "../../components/card/ServiceCard";

interface Service {
    title: string,
    content: string,
    img_url: string
}

// 5 services
let services: Service[] = [{
    title: "Residential Trash Pickup",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque eveniet exercitationem fugiat molestias neque quia quisquam temporibus totam voluptates. Dolorem error esse eveniet fugiat iure nemo qui recusandae repellendus",
    img_url: "src/assets/services1.jpg"
}, {
    title: "Bulk Trash  Pickup & Recycling Service",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque eveniet exercitationem fugiat molestias neque quia quisquam temporibus totam voluptates. Dolorem error esse eveniet fugiat iure nemo qui recusandae repellendus",
    img_url: "src/assets/services2.jpg"
}, {
    title: "Road Sweeping",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque eveniet exercitationem fugiat molestias neque quia quisquam temporibus totam voluptates. Dolorem error esse eveniet fugiat iure nemo qui recusandae repellendus",
    img_url: "src/assets/services3.png"
}, {
    title: "Weed Removal & Gardening",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque eveniet exercitationem fugiat molestias neque quia quisquam temporibus totam voluptates. Dolorem error esse eveniet fugiat iure nemo qui recusandae repellendus",
    img_url: "src/assets/services4.png"
}]

const Services = () => {
    return (<section className={'py-[50px] '}>
        <div className={'flex flex-col items-center mb-[50px]'}>
            <h2 className={'text-3xl  font-medium text-[#0FAF72]'}>
                SERVICES
            </h2>
            <h1 className={'text-center text-[48px] font-bold'}>
                Get started with Eco today
            </h1>
        </div>
        {
            services.map((service, index) => (
                <ServiceCard key={index} title={service.title} content={service.content} img_url={service.img_url}/>

            ))
        }
    </section>);
}
export default Services;

