import React from "react";
import {Input} from "@nextui-org/react";

const TextField = (props: any) => {
    return (<Input
        type={props.type}
        label={props.label}
        className="w-[100%]"
        placeholder={props.placeholder}
        required={props.isRequired}
    />);
}
export default TextField;