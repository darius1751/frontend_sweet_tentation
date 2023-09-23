import { Outlet } from "react-router-dom";
import { NavBar } from "../../api/components/nav_bar/NavBar";
import logo from '../../assets/Logo.png';
export const NavigateOutlet = () => {
    return (
        <div>
            <NavBar.Horizontal
                logo={{ src: logo, url: '/' }}
                navLinks={
                    [
                        { text: "Postres", url: 'postres' },
                        { text: "Ofertas", url: 'ofertas' },
                        { text: "Novedades", url: 'novedades' }
                    ]} />
            <Outlet />
        </div>
    );

}