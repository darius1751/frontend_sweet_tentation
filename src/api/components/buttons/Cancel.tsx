import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsButton } from "./propsButton";
import { faCancel } from "@fortawesome/free-solid-svg-icons";

export const Cancel = ({ text, onClick, className, disabled }: PropsButton) => {
    return (
        <button className={`btn btn-danger ${className ?? ""}`} onClick={onClick} disabled={disabled}>
            <span className='btn-cancel-icon'><FontAwesomeIcon icon={faCancel} /></span>
            <span className="btn_text">{text ?? "Cancelar"}</span>
        </button>
    )
}