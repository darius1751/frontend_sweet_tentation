import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { PropsButton } from "./propsButton";

export const CloseView = ({ text, onClick, disabled }: PropsButton) => {
    return (
        <button className="btn btn-danger" onClick={onClick} disabled={disabled}>
            <span className='btn-close-view-icon'><FontAwesomeIcon icon={faEyeSlash} /></span>
            <span className="btn_text">{text ?? "Cerrar Visualizacion"}</span>
        </button>
    )
}