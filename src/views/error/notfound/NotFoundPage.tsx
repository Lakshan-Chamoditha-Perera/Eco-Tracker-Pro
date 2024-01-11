import {Button} from "@nextui-org/react";
import error404Image from '../../../assets/error404.png';
import {useState} from "react";

const NotFoundPage = () => {

    const [img] = useState<string>(error404Image)

    return (<section
        className={'px-[180px] pb-[50px] h-[90vh]  flex justify-around mt-[30px]'}>
        <div className={'w-[90%] rounded-[20px] shadow bg-white justify-around  flex flex-row '}>
            {/*left*/}
            <div className={' flex justify-around w-[50%] '}>
                <img className={'object-contain'} src={img} alt={'error 404'}/>
            </div>

            {/*right*/}
            <div className={'w-[40%] px-3 flex flex-col '}>
                <div className={'mt-[230px]  p-3 align-baseline justify-center '}>
                    <div className={'text-7xl font-bold'}>
                        <h1>
                            Uh Oh!
                        </h1>
                        <h1>
                            ERROR 404 :(
                        </h1>
                    </div>

                    <p className={'text-[#011E19] text-[20px] font-medium bold mt-2'}>
                        It looks like you got lost far enough. Don't worry, we'll get you back on track.
                    </p>

                    <div className={'mt-[40px] flex flex-col text-[20px] justify-between '}>
                        <Button
                            className={'font-medium bold hidden hover:bg-green-400 bg-[#0FAF72] text-white w-1/2 lg:flex'}
                            href="#" variant="flat">
                            Back To Homepage
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
export default NotFoundPage;