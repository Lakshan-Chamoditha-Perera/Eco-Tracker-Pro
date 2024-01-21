import Logo from '../../assets/Eco Track Pro Logo.png';
import WhatsApp_Logo from '../../assets/whatsapp.png';

const Footer = () => {
    return (<footer
        className={'mb-0 pt-[80px] bottom-0 bg-[#011E19] h-[450px] border border-green-950 px-[320px] flex flex-row align-middle '}>
        {/*left div*/}
        <div className={'flex-col flex justify-between text-white w-1/3 h-[100%] '}>
            {/*logo*/}
            <div className={'h-[150px] border-white border-2 shadow-md rounded'}>
                <img src={Logo} title="logo" alt="logo"
                     className={'rounded border-white border-2 h-[100%] w-[100%] object-cover'}/>
            </div>
            {/*middle*/}
            <div className={'flex flex-col py-2'}>
                <div className={'text-[20px] mb-2'}>Follow us on</div>
                <ul className={'flex flex-row border-white align-baseline justify-around'}>
                    <li className={'text-[10px] h-[50px] w-[50px]'}>
                        <img src="src/assets/facebook.png" title="logo" alt="logo"
                             className={'h-[100%] w-[100%]  rounded-full object-cover'}/>
                    </li>
                    <li className={'text-[10px] h-[50px] w-[50px]'}>
                        <img src="src/assets/twitterx.png" title="logo" alt="logo"
                             className={'h-[100%] w-[100%]  rounded-full object-cover'}/>
                    </li>
                    <li className={'text-[10px] h-[50px] w-[50px]'}>
                        <img src="src/assets/instagram.png" title="logo" alt="logo"
                             className={'h-[100%] w-[100%] rounded-full object-cover'}/>
                    </li>
                    <li className={'text-[10px] h-[50px] w-[50px]'}>
                        <img src={WhatsApp_Logo} title="logo" alt="logo"
                             className={'h-[100%] w-[100%] rounded-full  object-cover'}/>
                    </li>
                </ul>
            </div>

            {/*bottom*/}
            <div className={'text-[10px] mb-2 font align-bottom'}>
                <div>
                    Copyright 2023 Eco Tracker Pro. All rights received. Privacy Policy.
                </div>
                <div>
                    Developed by Lakshan Chamoditha Perera
                </div>
            </div>
        </div>
        {/*right div*/}
        <div className={'w-3/4 pt-[60px] px-[100px] text-white '}>
            <div className={'flex justify-between flex-row ml-0 '}>
                <div className={'flex flex-col'}>
                    <strong className={'pb-3'}>Quick Links</strong>
                    <div className={'flex flex-col'}>
                        <div className={''}> Home</div>
                        <div className={''}> About Us</div>
                        <div className={''}> Services</div>
                        <div className={''}> Address</div>
                        <div className={''}> Address</div>
                    </div>
                </div>
                <div className={'flex flex-col'}>
                    <strong className={'pb-3'}>Services</strong>
                    <div className={'flex flex-col'}>
                        <div className={''}> Service 1</div>
                        <div className={''}> Service 2</div>
                        <div className={''}> Service 3</div>
                        <div className={''}> Service 4</div>
                    </div>
                </div>
                <div className={'flex flex-col'}>
                    <strong className={'pb-3'}>Address</strong>
                    <div className={'flex flex-col'}>
                        <div className={''}> Home</div>
                        <div className={''}> About Us</div>
                        <div className={''}> Services</div>
                    </div>
                </div>
                <div className={'flex flex-col'}>
                    <strong className={'pb-3'}>Address</strong>
                    <div className={'flex flex-col'}>
                        <div className={''}> Home</div>
                        <div className={''}> About Us</div>
                        <div className={''}> Services</div>
                        <div className={''}> Address</div>
                        <div className={''}> Address</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>);
}
export default Footer;