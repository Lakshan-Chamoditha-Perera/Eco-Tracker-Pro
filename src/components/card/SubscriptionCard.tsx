import {Button} from "@nextui-org/react";

const SubscriptionCard =() => {
    return (
        <div className={'border-blue-400 border min-h-[600px] gap-2 p-2 grid grid-rows-6 w-[75%] '}>
            <div>
                <h1 className={' text-2xl border font-medium text-green-500'}>Personal</h1>
                <p>Perfect plan for starters</p>
            </div>
            <div>
                <h1 className={' text-5xl border font-medium text-green-500'}>49.99</h1>
            </div>
            <div className={'row-span-3  border border-red-600'}>
                <h1 className={'   grid text-2xl font-medium text-green-500'}>Personal</h1>
            </div>
            <div className={'border border-red-600 flex align-middle items-center justify-around'}>
                <Button
                    className={'text-white w-[75%] bg-green-500 rounded-[10px] p-2'}>
                    Subscribe
                </Button>
            </div>
        </div>
    );

}

export default SubscriptionCard;