import { Button } from "./components/buttons/Button"
import { Input } from "./components/inputs/Input";
import { Form } from "./components/forms/form";
import './style.css';
import { Container } from "./components/Container";
import { useForm } from "./hooks/useForm";
export const DemoApi = () => {
    const [onChange, { name, email, phone }] = useForm({ name: '', email: '', phone: '' });
    const saveInfo = () => {
        
    }
    return (
        <Container>
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
            <br /><br />
            <Form.Sm onSubmit={(e) => { e.preventDefault(); }} >
                <h3 style={{ textAlign: 'justify', width: '90%', margin: '0 auto' }}>Llene el formulario, para recibir mas notificaciones sobre ofertas y nuevos productos</h3>
                <br /><br />
                <Input.Sm label="Nombre" name="name" placerholder="Ingrese un dato" type="text" value={name} onChange={onChange} />
                <br /><br />
                <Input.Sm label="Email" name="email" placerholder="Ingrese un dato" type="text" value={email} onChange={onChange} />
                <br /><br />
                <Input.Sm label="Telefono" name="phone" placerholder="Ingrese un dato" type="text" value={phone} onChange={onChange} />
                <br /><br />

                <Button.Send />
            </Form.Sm>
            <br /><br /><br />
            <Form.Lg onSubmit={(e) => { e.preventDefault(); }} >
                <Input.Lg label="Nombre" name="smallInput" placerholder="Ingrese un dato" type="text" />
                <br /><br />
                <Input.Image name="mainImage" />
                <br /><br />
                <Input.Lg label="Email" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                <br /><br />
                <Input.Lg label="Telefono" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                <br /><br />
                <Input.Image name="image1" />
                <br /><br />
                <Input.Lg label="Telefono" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                <br /><br />
                <Button.Send onClick={saveInfo} />

            </Form.Lg>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Container>
    )
}