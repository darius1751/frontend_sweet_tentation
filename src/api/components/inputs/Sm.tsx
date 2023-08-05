import { PropsInput } from "./propsInput";

export const Sm = ({ label, name, onChange, className, value, placerholder, type }: PropsInput) => {
    return (
        <section className="field-input">
            <label className="input-label">{label}</label>
            <input className={`input input-sm ${className ?? ""}`} value={value} type={type} name={name} placeholder={placerholder} onChange={onChange} />
        </section>
    )
}