import React from "react";
import {Input} from "@nextui-org/react";

export default function PasswordInput(data) {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <Input
            label={data.label}
            placeholder={data.placeholder}
            endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                        <p className={'text-[12px] m-1 text-default-400 pointer-events-none '}>hide</p>
                    ) : (
                        <p className={'text-[12px] m-1 text-default-400 pointer-events-none'}>show</p>
                    )}
                </button>
            }
            type={isVisible ? "text" : "password"}
            className="w-[100%]"
        />
    );
}
