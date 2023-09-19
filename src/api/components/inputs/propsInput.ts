import { ChangeEvent } from "react";

export interface PropsInput {
    label: string;
    classNameField?: string;
    classNameInput?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placerholder?: string;
    name: string;
    value?: string | number | readonly string[];
    type?: "text" | "password" | "email" | "date" | "datetime-local" | "number" | "time" | "url" | "week";
    optional?: boolean;
}

export interface PropsInputSearch {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placerholder?: string;
    name: string;
    value?: string;
}

export interface PropsTextArea {
    label: string;
    onChange?: (e: ChangeEvent<any>) => void;
    classNameField?: string;
    classNameInput?: string;
    placerholder?: string;
    name: string;
    maxLength?: number;
    value?: string | number | readonly string[];
    optional?: boolean;
}