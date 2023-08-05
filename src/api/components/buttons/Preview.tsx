import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsButton } from "./propsButton"
import { faEye } from "@fortawesome/free-solid-svg-icons"

export const Preview = ({ text, onClick, className, disabled }: PropsButton) => {
    return (
        <button className={`btn btn-preview ${className ?? ""}`} onClick={onClick} disabled={disabled}>
            <span className='btn-preview-icon'><FontAwesomeIcon icon={faEye} /></span>
            <span className="btn_text">{text ?? "Previsualizar"}</span>
        </button>
    )
}