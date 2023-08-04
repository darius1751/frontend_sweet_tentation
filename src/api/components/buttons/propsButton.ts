import { MouseEventHandler } from "react";

export type PropsButton = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    disabled?: boolean;
};