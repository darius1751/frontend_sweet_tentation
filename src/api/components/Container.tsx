import { ReactNode } from "react"

export interface PropsContainer {
    children: ReactNode
}
export const Container = ({ children }: PropsContainer) => {
    return (
        <section className="container">
            {children}
        </section>
    )
}