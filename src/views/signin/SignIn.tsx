import {Button} from "@nextui-org/react";
import TextField from "../../components/input/TextField.tsx";
import img1 from '../../assets/signin.png';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Swal from "sweetalert2";
import {emailRegex} from "../../util/regex.ts";
import axios from "axios";
import Cookies from "js-cookie";

function SignIn() {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (newValue: string) => {
        setEmail(newValue);
    }
    const handlePasswordChange = (newValue: string) => {
        setPassword(newValue);
    }
    const login = () => {

        let validated = new Promise((resolve, reject) => {
            (emailRegex.test(email) && password.length > 0) ? resolve(true) : reject("Invalid email or password");
        });

        validated.then(() => {
            console.log("Validated");
            let data = {
                "email": "shan@gmail.com", "password": "shan"
            };

            let config = {
                method: 'post', maxBodyLength: Infinity, url: 'http://localhost:3001/user/signin', headers: {
                    'Content-Type': 'application/json'
                }, data: JSON.stringify(data)
            };

            axios.request(config)
                .then((response) => {
                    console.log(response.data);
                    if (response.data.status === 200) {
                        Swal.fire({
                            icon: "success", title: "Login success", text: response.data.message
                        });
                    
                        Cookies.set("token", response.data.data.token); //-> npm install js-cookie , npm i --save-dev @types/js-cookie
                        Cookies.set("email", JSON.stringify(response.data.data.email)); // JSON.parse("")

                        switch (response.data.data.role) {
                            case "client":
                                navigate("/client");
                                break;
                            case "admin":
                                navigate("/admin");
                                break;
                        }

                    } else {
                        Swal.fire({
                            icon: "error", title: "Login failed", text: response.data.message
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        }).catch((error) => {
            Swal.fire({
                icon: "error", title: "Invalid user inputs", text: error
            });
        });
    }


    return (<section
        className={'bg-gradient-to-t from-[#EAF5F1] to-[#FFFFFF]  px-[180px] pb-[50px] h-[100vh] flex justify-around mt-[30px]'}>
        <div className={'w-[80%] rounded-[20px] shadow bg-white justify-around  flex flex-row border'}>
            {/*left*/}
            <div className={' flex justify-around w-[50%] '}>
                <img className={'object-contain'} src={img1} alt={'phone'}/>
            </div>

            {/*right*/}
            <div className={'w-[40%] p-3  '}>
                <div className={'mt-[130px] p-3 '}>
                    <h2 className={'text-3xl mb-7  font-medium text-[#0FAF72]'}>
                        SIGN IN
                    </h2>
                    <h1 className={'text-5xl  font-bold'}>
                        Welcome Back!
                    </h1>
                    <p className={'text-[#011E19] text-[18px] mt-1'}>
                        To keep connected with us please login with your personal info
                    </p>
                </div>

                <form className={'mt-[10px] flex flex-col justify-between '}>
                    <div className={'m-2 flex justify-end'}>
                        <TextField
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            isRequired={true}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className={'m-2 flex flex-col  justify-end'}>
                        <a className={' flex-row text-[14px] text-gray-300 tracking-normal flex hover:text-black hover:cursor-pointer  justify-end'}>
                            forgot password?
                        </a>
                        <TextField
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            value={password}
                            isRequired={true}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={'m-2 text-[14px] flex justify-between'}>
                        <div className={'py-2 pl-4'}>
                            Don't have an account? <a className={'text-green-500'}>Sign Up</a>
                        </div>
                        <Button className={'hidden hover:bg-green-400 bg-[#0FAF72] text-white  lg:flex'} variant="flat"
                                onClick={login}
                        >
                            Sign In
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    </section>);
}

export default SignIn;
