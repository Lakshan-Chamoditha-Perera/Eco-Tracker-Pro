import React from "react";

import {Button, Link} from "@nextui-org/react";

const NotFoundPage = () => {

    return (<section
        className={'  px-[180px] pb-[50px] h-[90vh]  flex justify-around mt-[30px]'}>
        <div className={'w-[90%] rounded-[20px] shadow bg-white justify-around  flex flex-row '}>
            {/*left*/}
            <div className={' flex justify-around w-[50%] '}>
                <img className={'object-contain'} src={'src/assets/error404.png'} alt={'error 404'}/>
            </div>

            {/*right*/}
            <div className={'w-[40%] px-3 flex flex-col '}>
                <div className={'mt-[230px]  p-3 align-baseline justify-center '}>
                    <h1 className={'text-7xl  font-bold'}>
                        Uh Oh! Error 404
                    </h1>

                    <p className={'text-[#011E19] text-[18px] mt-1'}>
                        It looks like you got lost far enough. Don't worry, we'll get you back on track.
                    </p>

                    <div className={'mt-[50px] flex flex-col justify-between '}>
                            <Button as={Link} className={'hidden hover:bg-green-400 bg-[#0FAF72] text-white w-1/2 lg:flex'}
                                    href="#" variant="flat">
                                Back To Home Page
                            </Button>
                    </div>
                </div>


                {/*  <ul className={'flex mt-[10px] px-[50px] border border-red-500 flex-row justify-around'}>
                        <Button className={'border   border-black'}>1</Button>
                        <Button className={'border   border-black'}>2</Button>
                        <Button className={'border   border-black'}>3</Button>
                    </ul>*/}
            </div>
        </div>
    </section>);
}

export default NotFoundPage;