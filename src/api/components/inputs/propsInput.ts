import { ChangeEvent } from "react";

export interface PropsInput {
    label: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placerholder?: string;
    name: string;
    value?: string | number | readonly string[];
    type?: "text" | "password" | "email" | "date" | "datetime-local" | "number" | "time" | "url" | "week";
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
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    placerholder?: string;
    name: string;
    maxLength?: number;
    value?: string | number | readonly string[];
}