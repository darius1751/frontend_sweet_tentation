import { Button } from "./components/buttons/Button"
import './style.css';
export const DemoApi = () => {
    return (
        <div className="container">
            <Button.Clean />
            <br />
            <br />
            <Button.Save />
            <br />
            <br />
            <Button.Delete text="Eliminar del carrito" onClick={() => { console.log("DELETE"); }} disabled />
            <br />
            <br />
            <Button.Reset onClick={() => { console.log("RESET") }} disabled />
            <br />
            <br />
            <Button.Cancel onClick={() => { console.log("Cancel") }} />
            <br /><br />
            <Button.CloseView />
            <br /><br />
            <Button.Send />
            <br /><br />
            <Button.Pay />
            <br /><br />
            <Button.Preview />
            <br /><br />
            <Button.AddToCart />
        </div>
    )
}