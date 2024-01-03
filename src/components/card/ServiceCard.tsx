import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const ServiceCard = (props: { img_url: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    return (
        <section className={'my-5'} >
            <div className="bg-white shadow-lg overflow-hidden relative">
                <div className="relative">
                    <img
                        src={props.img_url}
                        alt="Service Background"
                        className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black border-2 border-blue-600 opacity-70"></div>
                    <div className="absolute border-2 text-white mb-[50px] mx-[320px] border-white bottom-0 left-0 p-5">
                        <h1 className="text-4xl font-bold text-white">
                            {props.title}
                        </h1>
                        <p className={'text-[20px]'}>
                            {props.content}
                        </p>
                    </div>
                </div>
            </div>
        </section>);
};

export default ServiceCard;

//z-index in tailwind -> https://tailwindcss.com/docs/z-index
//what is inset-0 -> https://tailwindcss.com/docs/top-right-bottom-left