import { MouseEventHandler } from "react";
export interface PropsButton {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    disabled?: boolean;
};