import { MouseEventHandler } from "react";
export interface PropsButton {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    className?: string;
    disabled?: boolean;
};
export interface PropsCloseModal {

    close: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    className?: string;
    disabled?: boolean;

}