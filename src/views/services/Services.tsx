import * as url from "url";

interface Service{
    title:string,
    content:string,
    img: url
}

// 5 services
let services:Service[] = [
    {
        title:"Service 1",
        content:"Service 1 description",
        img:""
    },
    {
        title:"Service 2",
        content:"Service 2 description",
        img:""
    },
    {
        title:"Service 3",
        content:"Service 3 description",
        img:""
    },
    {
        title:"Service 4",
        content:"Service 4 description",
        img:""
    },
    {
        title:"Service 5",
        content:"Service 5 description",
        img:""
    }
]

const Services = () => {

    return (
        <section>
            <div>

            </div>
        </section>
    );
}
export default Services;