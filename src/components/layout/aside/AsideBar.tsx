import {Button} from "@nextui-org/react";
import {Link} from "react-router-dom";
import ProfileImg from '../../../assets/img_client1.png';
import {PathProperties} from "../../../util/PathProperties.ts";
import {useState} from "react";
import { MdSpaceDashboard } from "react-icons/md";

interface Props {
    list?: PathProperties[]
}

const AsideBar = (props: Props) => {
    const [profile] = useState<string>(ProfileImg)
    return (<section className={'sticky bg-green-50 top-0 left-0 w-[300px] h-[100vh] border-r-1 border-r-[#0FAF72]/20 '}>
        <div className={'flex-col grid grid-rows-10 h-[100%] w-[100%] p-2'}>
            <div className={'row-span-4 flex flex-col rounded-[20px] bg-white p-3 mb-5 border-2'}>
                <div className={'flex flex-row justify-center'}>
                    <img className={'object-contain border rounded-full'} src={profile}
                         alt={'profile'}/>
                </div>
                <div className={'flex flex-row  mt-4 justify-center'}>
                    <h1 className={'text-2xl font-bold'}>John Doe</h1>
                </div>
            </div>
            <div

                className={'row-span-6 grid-rows-8 gap-1 grid-cols-1 w-full p-2 grid align-middle items-center border-green-200 text-[#011E19]  rounded-[10px] bg-white justify-evenly'}>

                <h1 className={'text-2xl font-bold'}>
                    Navigation
                </h1>
                {props.list ? props.list.map((element) => {
                    return (<div key={element.name}
                                 className={'flex border-amber-300 w-full h-full justify-center'}>
                        <Link className={'w-full'} to={element.path}>

                            <button className={'hover:bg-green-100 text-2xl  grid grid-cols-4  p-2 justify-around transition  w-full h-full'} >
                                <div className={'h-full text-3xl flex items-center justify-around '}>
                                    <MdSpaceDashboard />
                                </div>
                                <h1 className={'col-span-3  text-2xl justify-start items-center flex h-full '}>
                                    {element.name}
                                </h1>
                            </button>
                        </Link>
                    </div>)
                }) : null}
            </div>

            <div className={'flex border flex-row mt-3 justify-center'}>
                <Button radius={'none'} as={Link} className={'hidden hover:bg-green-400 bg-[#0FAF72] text-white w-full  lg:flex'}
                        variant="flat">
                    Logout
                </Button>
            </div>
        </div>
    </section>)
}
export default AsideBar;