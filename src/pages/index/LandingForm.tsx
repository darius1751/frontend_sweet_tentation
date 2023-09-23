import { FormEvent } from "react"
import { Form } from "../../api/components/forms/form"
import { Input } from "../../api/components/inputs/Input";
import { Button } from "../../api/components/buttons/Button";

export const LandingForm = () => {
    const sendForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <Form.Sm onSubmit={sendForm}>
            <Input.Sm label="Nombre" name="name" placerholder="Ingrese su nombre"/>
            <br />
            <Input.Sm label="Email" name="email" placerholder="Ingrese su email" type="email"/>
            <br />
            <Input.Sm label="Telefono" name="phone" placerholder="Ingrese su telefono"/>
            <br/>
            <Button.Send/>
        </Form.Sm>
    )
}