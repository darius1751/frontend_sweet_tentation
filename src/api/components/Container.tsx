import { ReactNode } from "react"

export interface PropsContainer {
    children: ReactNode;
    className?: string;
}
export const Container = ({ children, className }: PropsContainer) => {
    return (
        <section className={`container ${className}`}>
            {children}
        </section>
    )
}