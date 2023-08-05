export interface PropsContainer {
    children: React.JSX.Element[];
}
export const Container = ({ children }: PropsContainer) => {
    return (
        <section className="container">
            {children}
        </section>
    )
}