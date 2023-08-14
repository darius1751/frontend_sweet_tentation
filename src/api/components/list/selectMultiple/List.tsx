import { Item } from "./Item";
import { PropsList } from "./propsSelectMultiple";

export const List = ({ list, values, setValues }: PropsList) => {
    return (
        <article className="select-multiple-options">
            {list.map(({ value, text }) => <Item value={value} text={text} key={value} values={values} setValues={setValues} />)}
        </article>
    )
}