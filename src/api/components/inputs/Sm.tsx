import { PropsInput } from "./propsInput";

export const Sm = ({ label, name, onChange, classNameInput, classNameField, value, placerholder, type }: PropsInput) => {
    return (
        <section className={`field-input ${classNameField ?? ""}`}>
            <label className="input-label">{label}</label>
            <input className={`input input-sm ${classNameInput ?? ""}`} value={value} type={type} name={name} placeholder={placerholder} onChange={onChange} />
        </section>
    )
}