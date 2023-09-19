import { PropsInput } from "./propsInput";

export const Md = ({ label, name, onChange, classNameField, classNameInput, value, placerholder, type }: PropsInput) => {
    return (
        <section className={`field-input ${classNameField ?? ""}`}>
            <label className="input-label">{label}</label>
            <input className={`input input-md ${classNameInput ?? ""}`} value={value} type={type} name={name} placeholder={placerholder} onChange={onChange} />
        </section>
    )
}