import { useEffect, useRef, useState } from "react";
import { PropsInput, ValidatorMessage } from "./propsInput";

export const Sm = ({ label, name, onChange, className, value, placerholder, type, validators }: PropsInput) => {
    const [messages, setMessages] = useState<ValidatorMessage[]>([]);
    const $input = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (validators) {
            const validations: any[] = [];
            for (let i = 0; i < validators.length; i++) {
                const { validation } = validators[i];
                validations.push((e: any) => {
                    validation(e);
                
                })
                $input.current?.addEventListener('change', validations[i]);
            }
            return () => {
                for (let i = 0; i < validators.length; i++) {
                    $input.current?.removeEventListener('change', validations[i]);
                }
            }
        }
    }, [])
    return (
        <section className="field-input">
            <label className="input-label">{label}</label>
            <input
                className={`input input-sm ${className ?? ""}`}
                value={value}
                type={type}
                name={name}
                placeholder={placerholder}
                onChange={onChange}
                ref={$input} />
            {
                messages.map((message) => <small key={message.id}>{message.message}</small>)
            }
        </section>
    )
}