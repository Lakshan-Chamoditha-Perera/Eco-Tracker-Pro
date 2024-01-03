import {Button} from "@nextui-org/react";

const HeroSection1 = () => {
    return (
        <section
            className={"min-h-[400px] justify-center h-auto px-[320px] flex flex-col align-middle "}>
            <div className={'backdrop-blur-sm bg-[#EAF5F1]/50 py-[50px] rounded-[20px] '}>
                <div className={'flex flex-col mb-4 items-center'}>
                    <h2 className={'text-3xl  font-medium text-[#0FAF72]'}>
                        PARTNERS AND ASSOCIATES
                    </h2>
                </div>
                <ul className={'px-[50px]  flex flex-row justify-between'}>
                    <li className={'flex  w-[220px] h-[50px]    flex-row'}>
                        <img src={'src/assets/Partner-1.png'} alt={'logo'}/>
                    </li>
                    <li className={'flex  w-[220px] h-[50px]    flex-row'}>
                        <img src={'src/assets/Partner-2.png'} alt={'logo'}/>
                    </li>
                    <li className={'flex  w-[220px] h-[50px]    flex-row'}>
                        <img src={'src/assets/Partner-3.png'} alt={'logo'}/>
                    </li>
                    <li className={'flex  w-[220px] h-[50px]    flex-row'}>
                        <img src={'src/assets/Partner-4.png'} alt={'logo'}/>
                    </li>
                    <li className={'flex  w-[220px] h-[50px]    flex-row'}>
                        <img src={'src/assets/Partner-5.png'} alt={'logo'}/>
                    </li>
                </ul>
              {/*  <div className={'flex flex-row items-center px-[50px] justify-between mt-4'}>
                    <h2 className={'text-[35px] text-green-800 font-medium'}>
                        Do you wanna be a part of us?
                    </h2>
                    <Button className={'bg-green-400  text-white font-medium'} variant="flat">
                        Register Now
                    </Button>
                </div>*/}
            </div>
        </section>);
}

export default HeroSection1;

//glass effects in tailwind css -> https://dev.to/afif/i-made-a-tailwind-css-plugin-for-glassmorphism-5f4i
