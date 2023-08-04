import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsButton } from "./propsButton"
import { faEye } from "@fortawesome/free-solid-svg-icons"

export const Preview = ({ text, onClick, disabled }: PropsButton) => {
    return (
        <button className="btn btn-preview" onClick={onClick} disabled={disabled}>
            <span className='btn-preview-icon'><FontAwesomeIcon icon={faEye} /></span>
            <span className="btn_text">{text ?? "Previsualizar"}</span>
        </button>
    )
}