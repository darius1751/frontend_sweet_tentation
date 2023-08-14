import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsModal } from "./propsModal"
import { faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons"

export const Info = ({ title, message, close}: PropsModal) => {
    return (
        <section className="back-modal">
            <article className="modal modal-md">
            <FontAwesomeIcon icon={faXmark} className="modal-close-icon" onClick={close} />
                <FontAwesomeIcon icon={faCircleInfo} className="modal-icon modal-info-icon"/>
                <br />
                <span className="modal-title">
                    <strong>{title}</strong>
                </span>
                <p className="modal-message">{message}</p>
            </article>
        </section>
    )
}