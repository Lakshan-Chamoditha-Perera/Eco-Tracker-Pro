import {Input} from "@nextui-org/react";
import React from "react";

const TextField = (props: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Call the onChange function passed in the props with the updated value
        props.onChange(event.target.value);
    };
    return (<Input
        type={props.type}
        label={props.label}
        className="w-[100%]"
        placeholder={props.placeholder}
        required={props.isRequired}
        color={props.color}
        value={props.value}
        onChange={handleChange}
    />);
}
export default TextField;