import SubscriptionCard from "../../../../components/card/SubscriptionCard.tsx";

const ClientsSubscription = () => {
    return (<div>
        <div className={'flex w-0.8 p-3 justify-evenly min-h-[300px] flex-col border'}>
            <h1 className={'text-5xl font-medium text-green-500'}>
                Subscription
            </h1>
            <div className={'grid grid-cols-4 w-0.8 p-3 justify-evenly min-h-[350px] flex-col border'}>
                <div className={'border gap-5 col-span-2 grid grid-rows-6'}>

                    <div className={'border grid  grid-cols-4'}>
                        <h1 className={' text-2xl font-medium text-green-500'}>
                            User Details
                        </h1>

                    </div>
                    <div className={'border grid  grid-cols-4'}>
                        <h1 className={' text-2xl font-medium text-green-500'}>
                            Name
                        </h1>
                        <div className={'grid col-span-3 border-2'}>q
                        </div>
                    </div>

                    <div className={'border grid  grid-cols-4'}>
                        <h1 className={' text-2xl font-medium text-green-500'}>
                            Email
                        </h1>
                        <div className={'grid col-span-3 border-2'}>q
                        </div>
                    </div>

                    <div className={'border grid  grid-cols-4'}>
                        <h1 className={' text-2xl font-medium text-green-500'}>
                            Mobile
                        </h1>
                        <div className={'grid col-span-3 border-2'}>q
                        </div>
                    </div>

                    <div className={'border grid  grid-cols-4'}>
                        <h1 className={' text-2xl font-medium text-green-500'}>
                            Member since
                        </h1>
                        <div className={'grid col-span-3 border-2'}>q
                        </div>
                    </div>


                </div>

                <div className={'border'}>
                    <h1 className={' text-2xl font-medium text-green-500'}>Current Subscription</h1>
                </div>
                <div className={'border'}>
                    <h1 className={' text-2xl font-medium text-green-500'}>Subscription History</h1>
                </div>
            </div>
        </div>
        <div className={'flex w-0.8 p-3 justify-evenly min-h-[500px] flex-col border'}>
            <div className={'grid gap-5 grid-cols-3 w-0.8 p-3 justify-evenly min-h-[600px] flex-col border'}>
            </div>
        </div>
    </div>)
}
export default ClientsSubscription;