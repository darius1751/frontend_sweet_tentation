import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsButton } from "./propsButton";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

export const Pay = ({ text, onClick, disabled }: PropsButton) => {
    return (
        <button className="btn btn-main" onClick={onClick} disabled={disabled}>
            <span className="btn_text">
                <span className='btn-pay-icon'><FontAwesomeIcon icon={faCoins} /></span>
                {text ?? "Pagar"}
            </span>
        </button>
    )
}