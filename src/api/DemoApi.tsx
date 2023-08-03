import { Button } from "./components/buttons/Button"
import './style.css';
export const DemoApi = () => {
    return (
        <div className="container">
            <Button.Clean/>
            <br />
            <Button.Save/>
            <br />
            <Button.Delete text="Eliminar del carrito"/>
        </div>
    )
}