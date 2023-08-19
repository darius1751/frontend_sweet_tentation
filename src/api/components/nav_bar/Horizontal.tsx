import { NavLink } from "react-router-dom"
import { PropsNavBar } from "./propsNavBar"

export const Horizontal = ({ logo, navLinks, navLinksLast, className }: PropsNavBar) => {
    const { url, src } = logo;
    return (
        <nav className={`nav nav-horizontal ${className ?? ""}`}>
            <NavLink to={url}>
                <img src={src} alt="Logo" className={`nav-logo ${logo.className ?? ""}`} />
            </NavLink>
            <article className="nav-links">
                {navLinks.map(({ text, url, className }) => <NavLink className={`nav-link ${className ?? ""}`} key={text + url} to={url}>{text}</NavLink>)}
                <article className="nav-links-last">
                    {navLinksLast?.map(({ text, url, className }) => <NavLink className={`nav-link ${className ?? ""}`} key={text + url} to={url}>{text}</NavLink>)}
                </article>
            </article>

        </nav>
    )
}