import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsButton } from "./propsButton"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

export const Delete = ({ text, onClick }: PropsButton) => {
    return (
        <button className="btn btn-delete" onClick={onClick}>
            <span className='btn-delete-icon'><FontAwesomeIcon icon={faTrashCan} /></span>
            <span className="btn_text">{text ?? "Eliminar"}</span>
        </button>
    )
}