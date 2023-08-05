import { PropsForm } from "./propsForm";

export const Sm = ({ onSubmit, className, children }: PropsForm) => {
    return (
        <form onSubmit={onSubmit} className={`form-sm ${className ?? ""}`}>
            {children}
        </form>
    );
}