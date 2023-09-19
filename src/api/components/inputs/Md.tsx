import { useEffect, useRef, useState } from "react";
import { PropsInput, ValidatorMessage } from "./propsInput";

export const Md = ({ label, name, className, value, placerholder, type, validators, onChange }: PropsInput) => {
    const [messages, setMessages] = useState<ValidatorMessage[]>([]);
    const $input = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (validators) {
            const validationsFunctions: any[] = [];
            for (let i = 0; i < validators.length; i++) {
                const { validation } = validators[i];
                validationsFunctions.push((e: any) => {
                    if (validation(e)) {
                        console.log("Correct");
                    }
                    else {
                        console.log("Incorrect");
                    }
                })
                $input.current?.addEventListener('change', validationsFunctions[i]);
            }
            return () => {
                for (let i = 0; i < validators.length; i++) {
                    console.log("DELETED");
                    $input.current?.removeEventListener('change', validationsFunctions[i]);
                }
            }
        }

    }, [validators])

    return (
        <section className="field-input">
            <label className="input-label">{label}</label>
            <input
                className={`input input-md ${className ?? ""}`}
                value={value}
                type={type}
                name={name}
                placeholder={placerholder}
                onChange={onChange}
                ref={$input} />
        </section>
    )
}