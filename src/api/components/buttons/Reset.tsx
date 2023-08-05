import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { PropsButton } from "./propsButton";

export const Reset = ({ text, onClick, className,  disabled }: PropsButton) => {
    return (
        <button className={`btn btn-reset ${className ?? ""}`} onClick={onClick} disabled={disabled}>
            <span className='btn-reset-icon'><FontAwesomeIcon icon={faArrowsRotate} /></span>
            <span className="btn_text">{text ?? "Estado actual"}</span>
        </button>
    )
}