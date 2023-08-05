import { Button } from "./components/buttons/Button"
import { Input } from "./components/inputs/Input";
import './style.css';
export const DemoApi = () => {
    return (
        <div className="container">

            <h2>Buttons</h2>
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
            <br /><br />
            <h2>Inputs</h2>
            <br /><br />
            <Input.Search name="search" placerholder="Ingrese lo que desea buscar" />
            <br /><br />
            <Input.Sm label="Input small" name="small" placerholder="Ingrese un dato" type="text" />
            <br /><br />
            <Input.Md label="Input Middle" name="middle" placerholder="Ingrese un dato" type="text" />
            <br /><br />
            <Input.Lg label="Input Large with password" name="large" placerholder="Ingrese un dato" type="password" />
            <br /><br />
            <Input.TextArea label="Detalles" name="detail" maxLength={500} placerholder="Ingrese el detalle" />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}