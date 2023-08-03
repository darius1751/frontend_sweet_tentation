import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { PropsButton } from "./propsButton";

export const Save = ({ text, onClick }: PropsButton) => {
    return (
        <button className="btn btn-save" type="submit" onClick={onClick}>
            <span className='btn-save-icon'><FontAwesomeIcon icon={faBookmark} /></span>
            <span className="btn_text">{text ?? "Guardar Cambios"}</span>
        </button>
    )
}