import { PropsForm } from "./propsForm";

export const Lg = ({ onSubmit, className, children }: PropsForm) => {
    return (
        <form onSubmit={onSubmit} className={`form-lg ${className ?? ""}`}>
            {children}
        </form>
    );
}