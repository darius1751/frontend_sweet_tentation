import { useEffect, useState } from "react"
import { PropsItem } from "./propsSelectMultiple"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare as faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare as faSquareUnCheck } from "@fortawesome/free-regular-svg-icons";

export const Item = ({ value, text, values, setValues }: PropsItem) => {
    const [check, setCheck] = useState(false);
    useEffect(() => {
        setCheck(values.includes(value));
    }, []);

    const onClick = () => {
        setCheck((oldCheck) => !oldCheck);
        if (!check)
            setValues([...values, value]);
        else {
            const valuesCopy = [...values];
            setValues(valuesCopy.filter((valueCopy) => valueCopy != value));
        }
    }
    return (
        <article data-value={value} onClick={onClick} className="select-multiple-option">
            {check ? <FontAwesomeIcon icon={faSquareCheck} className="select-multiple-option-icon" /> : <FontAwesomeIcon icon={faSquareUnCheck} className="select-multiple-option-icon" />} <span>{text}</span>
        </article>
    )
}