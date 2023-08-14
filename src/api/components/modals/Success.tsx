import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsModal } from "./propsModal"
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Button } from "../buttons/Button"

export const Success = ({ title, message, close }: PropsModal) => {
    return (
        <section className="back-modal">
            <article className="modal modal-md">
                <FontAwesomeIcon icon={faXmark} className="modal-close-icon" onClick={close} />
                <FontAwesomeIcon icon={faCircleCheck} className="modal-icon modal-success-icon" />
                <br />
                <span className="modal-title">
                    <strong>{title}</strong>
                </span>
                <p className="modal-message">{message}</p>
                <Button.Accept onClick={close} className="btn-close-modal"/>
            </article>
        </section>
    )
}