import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { PropsButton } from "./propsButton";

export const Save = ({ text, onClick, className, disabled }: PropsButton) => {
    return (
        <button className={`btn btn-save ${className ?? ""}`} type="submit" onClick={onClick} disabled={disabled}>
            <span className='btn-save-icon'><FontAwesomeIcon icon={faBookmark} /></span>
            <span className="btn_text">{text ?? "Guardar Cambios"}</span>
        </button>
    )
}