export interface NavLinkLogo {
    src: string;
    url: string;
    className?: string;
}

export interface NavLink {
    text: string | React.JSX.Element;
    url: string;
    className?: string;
}

export interface PropsNavBar {
    logo: NavLinkLogo;
    className?: string;
    navLinks: NavLink[];
    navLinksLast?: NavLink[];
}
