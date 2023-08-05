import { PropsInput } from "./propsInput";

export const Sm = ({ label, name, onChange, value, placerholder, type }: PropsInput) => {
    return (
        <section className="field-input">
            <label className="input-label">{label}</label>
            <input className="input input-sm" value={value} type={type} name={name} placeholder={placerholder} onChange={onChange} />
        </section>
    )
}