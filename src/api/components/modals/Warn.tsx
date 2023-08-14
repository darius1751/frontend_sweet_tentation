import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsModal } from "./propsModal";
import { faTriangleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Warn = ({ title, message, close }: PropsModal) => {
    return (
        <section className="back-modal">
            <article className="modal modal-md">
                <FontAwesomeIcon icon={faXmark} className="modal-close-icon" onClick={close} />
                <FontAwesomeIcon icon={faTriangleExclamation} className="modal-icon modal-icon-warn" />
                <br />
                <span className="modal-title">
                    <strong>{title}</strong>
                </span>
                <p className="modal-message">{message}</p>
            </article>
        </section>
    )
}