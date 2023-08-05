import { FormEvent } from "react";

export interface PropsForm {
    children: React.JSX.Element[];
    className?: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}