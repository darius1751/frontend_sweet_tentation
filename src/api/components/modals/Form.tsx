import { PropsContainer } from "../Container";

export const Form = ({ children }: PropsContainer) => {
    return (
        <section className="back-modal">
            <article className="modal modal-form">
                {children}
            </article>
        </section>
    )
}