import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsButton } from "./propsButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Accept = ({ text, onClick, className, disabled }: PropsButton) => {
    return (
        <button className={`btn btn-save ${className ?? ""}`} onClick={onClick} disabled={disabled}>
            <span className='btn-accept-icon'><FontAwesomeIcon icon={faCheck} /></span>
            <span className="btn_text">{text ?? "Aceptar"}</span>
        </button>
    )
}