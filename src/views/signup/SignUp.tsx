import {Button} from "@nextui-org/react";
import {useState} from "react";
import {nameRegex} from "../../util/regex.ts";
import TextField from "../../components/input/TextField.tsx";

import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [fname, setFname] = useState<string>("");
    const [lname, setLname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [temp_password, setTempPassword] = useState<string>("");
    const navigate = useNavigate();

    function validateUserData() {
        if (!nameRegex.test(fname)) {
            throw new Error("Invalid first name");
        }
        if (!nameRegex.test(lname)) {
            throw new Error("Invalid last name");
        }
        if (!email.includes("@")) {
            throw new Error("Invalid email");
        }
        if (password && temp_password && password !== temp_password) {
            throw new Error("Passwords do not match");
        }
    }

    const saveUser = () => {
        let user: User = {
            fname: fname, lname: fname, email: email, password: password
        };

        let config = {
            method: 'post', maxBodyLength: Infinity, url: 'http://localhost:3001/user/signup', headers: {
                'Content-Type': 'application/json'
            }, params: {}, data: JSON.stringify(user)
        };

        axios.request(config).then(function (response) {
            console.log(response.data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User registered successfully",
                showConfirmButton: true,
                confirmButtonText: "Return to login",
                timer: 1500
            });
        }).catch(function (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: error.response.data.status == 409 ? error.response.data.message : "Ooops",
                text: error.response.data.status == 409 ? error.response.data.message : "Something went wrong!"
            })
        });

    }
    const signup = () => {
        try {
            validateUserData();
            saveUser()
        } catch (e) {
            Swal.fire({
                icon: "error", title: "Oops...", text: "Something went wrong!"
            })
        }
    }
    const handleFnameChange = (newValue: string) => {
        setFname(newValue);
    };

    const handleLnameChange = (newValue: string) => {
        setLname(newValue);
    };

    const handleEmailChange = (newValue: string) => {
        setEmail(newValue);
    };

    const handlePasswordChange = (newValue: string) => {
        console.log(newValue);
        setPassword(newValue);
    };

    const handleTempPasswordChange = (newValue: string) => {
        setTempPassword(newValue);
    };
    // @ts-ignore
    return (<section
        className={'bg-gradient-to-t from-[#EAF5F1] to-[#FFFFFF] px-[180px] pb-[50px] h-[90vh] flex justify-around mt-[30px]'}>
        <div className={'w-[80%] rounded-[20px] shadow bg-white justify-around flex flex-row border'}>
            {/*left*/}
            <div className={'flex justify-around w-[50%] '}>
                <img className={'object-contain'} src={'src/assets/signup.png'} alt={'phone'}/>
            </div>

            {/*right*/}
            <div className={'w-[40%] p-3  '}>
                <div className={'mt-[130px] p-3 '}>
                    <h2 className={'text-3xl   font-medium text-[#0FAF72]'}>
                        Sign up
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
                        <div className={'m-2 flex justify-end'}>
                            <TextField
                                label="First Name"
                                placeholder="Enter your first name"
                                type="text"
                                id="fname"
                                isRequired={true}
                                value={fname}
                                onChange={handleFnameChange}

                            />
                        </div>
                        {/*last name */}
                        <div className={'m-2 flex justify-end'}>
                            <TextField
                                label="Last Name"
                                placeholder="Enter your last name"
                                type="text"
                                id="lname"
                                isRequired={true}
                                value={lname}
                                onChange={handleLnameChange} // Use specific handler for last name
                            />
                        </div>
                    </div>
                    <div className={'m-2 flex'}>
                        <TextField
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            id="email"
                            isRequired={true}
                            value={email}
                            onChange={handleEmailChange} // Use specific handler for email
                        />
                    </div>
                    <div className={'m-2 flex justify-end'}>
                        <TextField
                            label="Password"
                            placeholder="Enter Password"
                            type="text"
                            id="password"
                            isRequired={true}
                            value={password}
                            onChange={handlePasswordChange}

                        />
                    </div>
                    <div className={'m-2 flex flex-col  justify-end'}>
                        <TextField
                            label="Confirm Password"
                            placeholder="Enter Password"
                            type="text"
                            id="retype-password"
                            isRequired={true}
                            value={temp_password}
                            onChange={handleTempPasswordChange}
                        />
                    </div>
                    <div className={'m-2 text-[14px] flex justify-between align'}>
                        <Button className={'hidden hover:bg-green-400 bg-[#0FAF72] text-white  lg:flex'}
                                onClick={signup} variant="flat">
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