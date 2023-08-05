import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsButton } from "./propsButton"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

export const Delete = ({ text, onClick, className, disabled }: PropsButton) => {
    return (
        <button className={`btn btn-danger ${className ?? ""}`} onClick={onClick} disabled={disabled}>
            <span className='btn-delete-icon'><FontAwesomeIcon icon={faTrashCan} /></span>
            <span className="btn_text">{text ?? "Eliminar"}</span>
        </button>
    )
}