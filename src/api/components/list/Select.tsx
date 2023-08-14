import { PropsSelect } from "./selectMultiple/propsSelectMultiple"

export const Select = ({ label, list, name, onChange, value }: PropsSelect) => {
    return (
        <section className="field-input">
            <label className="input-label">{label}</label>
            <select className="input input-lg select select-common" name={name} onChange={onChange} value={value}>
                {list.map(({ text, value }) => <option key={value + `` + Math.random()} value={value}>{text}</option>)}
            </select>
        </section>
    )
}