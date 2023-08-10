import { useState } from "react"
import { List } from "./List"
import { PropsSelectMultiple } from "./propsSelectMultiple"

export const SelectMultiple = ({ list, label, values, setValues, placeholder }: PropsSelectMultiple) => {
    const [open, setOpen] = useState(false);
    const onClick = () => setOpen(!open);

    return (
        <section className="field-input">
            <label className="input-label">{label}</label>
            <section className="input input-lg select-multiple" onClick={onClick}>
                <span className="select-multiple-placeholder">{!values.length ? placeholder : `Valores seleccionados: ${values}`}</span>
            </section>
            {open && <List list={list} values={values} setValues={setValues} />}
        </section>
    )
}