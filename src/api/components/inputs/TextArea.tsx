import { PropsTextArea } from "./propsInput";

export const TextArea = ({ label, name, onChange, value, placerholder, maxLength = 250 }: PropsTextArea) => {
    return (
        <section className="field-input">
            <label className="input-label">{label}</label>
            <textarea className="input input-area" value={value} name={name} placeholder={placerholder} onChange={onChange} cols={5} rows={14} maxLength={maxLength}>
            </textarea>
        </section>
    )
}