import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsButton } from "./propsButton";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export const AddToCart = ({ text, onClick, disabled }: PropsButton) => {
    return (
        <button className="btn btn-main" onClick={onClick} disabled={disabled}>
            <span className='btn-add-to-cart-icon'><FontAwesomeIcon icon={faCartPlus} /></span>
            <span className="btn_text">{text ?? "Agregar al carrito"}</span>
        </button>
    )
}