import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { PropsInputSearch } from "./propsInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Search = ({ name, onChange, value, placerholder }: PropsInputSearch) => {
    return (
        <section>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="input-search-icon"/>
        <input className="input input-search" value={value} type={"search"} name={name} placeholder={placerholder} onChange={onChange} />
        </section>
    )
}