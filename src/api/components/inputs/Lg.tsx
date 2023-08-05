import { PropsInput } from "./propsInput";

export const Lg = ({ label, name, onChange, value, placerholder, type }: PropsInput) => {
    return (
        <section className="field-input">
            <label className="input-label">{label}</label>
            <input className="input input-lg" value={value} type={type} name={name} placeholder={placerholder} onChange={onChange} />
        </section>
    )
}