import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsButton } from "./propsButton";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const Send = ({ text, onClick, disabled }: PropsButton) => {
    return (
        <button className="btn btn-main" onClick={onClick} disabled={disabled}>
            <span className='btn-send-icon'><FontAwesomeIcon icon={faPaperPlane} /></span>
            <span className="btn_text">{text ?? "Enviar"}</span>
        </button>
    )
}