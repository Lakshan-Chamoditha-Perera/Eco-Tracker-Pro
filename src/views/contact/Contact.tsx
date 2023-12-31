const Contact = () => {
    return (<section className={" bg-[#EAF5F1] p-[20px] h-[85vh] border flex justify-around border-red-600 mt-[50px]"}>

        <div className={"row flex px-[250px] justify-around w-[100%]  flex-row  h-[100%]"}>
            {/*left*/}
            <div className={"w-[50%] p-[50px] flex-col  h-[100%] "}>
                <div className={'h-1/3 mb-9'}>
                    <h2 className={'text-3xl mb-7  font-medium text-[#0FAF72]'}>
                        CONTACT US
                    </h2>
                    <h1 className={'text-5xl  font-bold'}>
                        Let’s Talk About Your Information
                    </h1>
                    <p className={'text-[#011E19] text-[20px] mt-1'}>
                        We are here to answer any questions you may have about our Eco Tracker Pro experiences. Reach
                        out to
                        us and we’ll respond as soon as we can.</p>
                </div>
                <div className={'h-[60%] m-1 grid-cols-2 grid align-middle justify-evenly'}>
                    <div className={'m-5 p-2'}>
                        <div className={'w-[40px] h-[40px]'}>
                            <img src={'src/assets/icons8-call-100.png'} alt={'phone'}/>
                        </div>
                        <h3 className={'text-xl font-bold mb-2'}>PHONE </h3>
                        <p className={'text-m'}>
                            +94 76 722 3131
                            <br/>
                            +94 76 722 3131
                        </p>
                    </div>
                    <div className={'m-5 p-2'}>
                        <div className={'w-[50px] h-[50px]'}>
                            <img src={'src/assets/icons8-email-96.png'} alt={'phone'}/>
                        </div>
                        <h3 className={'text-xl font-bold mb-2'}>EMAIL </h3>
                        <p className={'text-m'}>
                            ecotrackpro@gmail.com
                        </p>
                    </div>
                    <div className={'m-5 p-2'}>
                        <div className={'w-[50px] h-[50px] '}>
                            <img src={'src/assets/icons8-location-100.png'} alt={'phone'}/>
                        </div>

                        <h3 className={'text-xl  font-bold mb-2'}>LOCATION </h3>
                        <p className={'text-m'}>
                            No.52,
                            <br/>
                            Panadura, SriLanka.
                        </p>
                    </div>
                    <div className={'m-5 p-2'}>
                        <div className={'w-[50px] h-[50px]'}>
                            <img src={'src/assets/icons8-clock-100.png'} alt={'phone'}/>
                        </div>
                        <h3 className={'text-xl font-bold mb-2'}>OPENING HOURS </h3>
                        <p className={'text-m '}>
                            Monday to Friday, 9am to 7pm
                            <br/>
                            Saturday 9am to 4pm
                            <br/>
                            Sunday 12am to 4pm
                        </p>
                    </div>
                </div>
            </div>

            {/*right*/}
            <div className={"w-[40%]  p-[40px] h-[100%]  flex flex-col justify-center"}>
                <form className={'bg-white shadow-xl rounded-3xl w-[100%] flex-col flex h-[90%]'}>

                </form>
            </div>


        </div>
    </section>)
}

// m-13.33vw-> 80px
// 3/4vh -> 75vh
//custom text colr -> text-[#011E19]
//bold
//box shadow ->
export default Contact;