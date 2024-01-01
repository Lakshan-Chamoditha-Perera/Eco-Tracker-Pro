import PasswordInput from "../../components/input/PasswordInput";
import {Button, Link} from "@nextui-org/react";
import React from "react";
import TextField from "../../components/input/TextField";

function SignUp() {
    return (<section
        className={'bg-gradient-to-t from-[#EAF5F1] to-[#FFFFFF]  px-[180px] pb-[50px] h-[90vh]   flex justify-around mt-[30px]'}>
        <div className={'w-[80%] rounded-[20px] shadow bg-white justify-around  flex flex-row border'}>
            {/*left*/}
            <div className={' flex justify-around w-[50%] '}>
                <img className={'object-contain'} src={'src/assets/signup.png'} alt={'phone'}/>
            </div>

            {/*right*/}
            <div className={'w-[40%] p-3  '}>
                <div className={'mt-[130px] p-3 '}>
                    <h2 className={'text-3xl   font-medium text-[#0FAF72]'}>
                        SIGN UP
                    </h2>
                    <h1 className={'text-5xl  font-bold'}>
                        Create Account
                    </h1>
                    <p className={'text-[#011E19] text-[18px] mt-1'}>
                        Create an account to get started.
                    </p>
                </div>

                <form className={'mt-[10px] flex flex-col justify-between '}>
                    <div className={'flex flex-row'}>
                        {/*first name */}
                        <div className={'m-2 flex justify-end'}>
                            <TextField
                                label="First Name"
                                placeholder="Enter your first name"
                                type="text"
                                isRequired={true}
                            />
                        </div>
                        {/*last name */}
                        <div className={'m-2 flex justify-end'}>
                            <TextField
                                label="Last Name"
                                placeholder="Enter your last name"
                                type="text"
                                isRequired={true}
                            />
                        </div>
                    </div>
                    <div className={'m-2 flex justify-end'}>
                        <TextField
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            isRequired={true}
                        />
                    </div>
                    <div className={'m-2 flex flex-col  justify-end'}>
                        <PasswordInput
                            label="Password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className={'m-2 flex flex-col  justify-end'}>

                        <PasswordInput
                            label="Confirm Password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className={'m-2 text-[14px] flex justify-between align'}>
                        <Button as={Link} className={'hidden hover:bg-green-400 bg-[#0FAF72] text-white  lg:flex'}
                                href="#" variant="flat">
                            Register
                        </Button>
                    </div>
                </form>
                {/*  <ul className={'flex mt-[10px] px-[50px] border border-red-500 flex-row justify-around'}>
                        <Button className={'border   border-black'}>1</Button>
                        <Button className={'border   border-black'}>2</Button>
                        <Button className={'border   border-black'}>3</Button>
                    </ul>*/}
            </div>
        </div>
    </section>);
}

export default SignUp;