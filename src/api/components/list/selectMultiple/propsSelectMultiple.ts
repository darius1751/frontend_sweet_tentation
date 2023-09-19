import { ChangeEvent } from "react";

export interface Item {
    value: string | number;
    text: string;
}
export interface PropsList {
    list: Item[];
    values: string[] | number[];
    setValues: React.Dispatch<React.SetStateAction<string[]>> | React.Dispatch<React.SetStateAction<number[]>>;
}
export interface PropsSelectMultiple {
    list: Item[];
    label: string;
    placeholder: string;
    values: string[] | number[];
    classNameField?: string;
    classNameInput?: string;
    setValues: React.Dispatch<React.SetStateAction<string[]>> | React.Dispatch<React.SetStateAction<number[]>>;
}
export interface PropsItem {
    text: string;
    value: string | number;
    values: any[];
    setValues: React.Dispatch<React.SetStateAction<string[]>> | React.Dispatch<React.SetStateAction<number[]>>;
}

export interface PropsSelect {
    label: string;
    name: string;
    list: Item[];
    value: string | number;
    onChange: (e: ChangeEvent<any>) => void;
}