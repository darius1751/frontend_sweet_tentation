import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { PropsButton } from './propsButton';


export const Clean = ({ onClick, text, disabled }: PropsButton) => {
    return (
        <button className="btn btn-clean" type="reset" onClick={onClick} disabled={disabled}>
            <span className='btn-clean-icon'><FontAwesomeIcon icon={faBrush} /></span>
            <span className="btn_text">{text ?? "Limpiar"}</span>
        </button>
    )
}