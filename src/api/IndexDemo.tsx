import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./components/buttons/Button"
import { Input } from "./components/inputs/Input";
import { Form } from "./components/forms/form";
import { Container } from "./components/Container";
import { useForm } from "./hooks/useForm";
import { List } from "./components/list/List";
import { Modal } from "./components/modals/Modal";
import { NavBar } from "./components/nav_bar/NavBar";

import logo from '../assets/Logo.png';
import './style.css';
export const IndexDemo = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [onChange, { name, email, phone, selectCommon }] = useForm({ name: '', email: '', phone: '', selectCommon: 0 });
    const [mainImage, setMainImage] = useState<File>();
    const [image1, setImage1] = useState<File>();
    const [categories, setCategories] = useState<string[]>([]);
    const saveInfo = (e: FormEvent) => {
        e.preventDefault();
        console.log({ mainImage, image1 });
    }
    const closeModal = () => setOpenModal(false);

    const onSubmitModal = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Gracias por llenar el formulario");
        closeModal();
    };
    const list = [
        { text: "Option 1", value: 1 },
        { text: "Option 2", value: 2 },
        { text: "Option 3", value: 3 },
        { text: "Option 4", value: 4 },
        { text: "Option 5", value: 5 },
        { text: "Option 6", value: 6 },
        { text: "Option 7", value: 7 },
        { text: "Option 8", value: 8 },
        { text: "Option 9", value: 9 },
        { text: "Option 10", value: 10 },
        { text: "Option 11", value: 11 },
        { text: "Option 12", value: 12 },
        { text: "Option 13", value: 13 },
        { text: "Option 14", value: 14 },
        { text: "Option 15", value: 15 },
    ];
    return (
        <section>
            <NavBar.Horizontal
                logo={{ src: logo, url: '/' }}
                navLinks={
                    [
                        { text: "Postres", url: 'postres' },
                        { text: "Ofertas", url: 'ofertas' },
                        { text: "Novedades", url: 'novedades' }
                    ]
                }
                navLinksLast={[
                    { text: "Iniciar sesion", url: 'login' },
                    { text: "Registrar", url: 'register' },
                    { text: <FontAwesomeIcon icon={faCartShopping} />, url: "cart" },                    
                ]} />
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
                <Button.Accept />
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
                <Form.Lg onSubmit={saveInfo} >
                    <Input.Lg label="Nombre" name="smallInput" placerholder="Ingrese un dato" type="text" />
                    <br /><br />
                    <Input.Image name="mainImage" setFile={setMainImage} />
                    <br /><br />
                    <Input.Lg label="Email" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                    <br /><br />
                    <Input.Lg label="Telefono" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                    <br /><br />
                    <Input.Image name="image1" setFile={setImage1} />
                    <br /><br />
                    <Input.Lg label="Telefono" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                    <br /><br />
                    <Button.Send />
                </Form.Lg>
                <br /><br />
                <List.SelectMultiple list={list} label="Categorias" placeholder="Seleccione las categorias" values={categories} setValues={setCategories} />
                <br />
                <br />
                <List.Select list={list} label="Select Comun" name="selectCommon" onChange={onChange} value={selectCommon} />
                <br />
                <br />
                <Button.Send />
                <Button.Preview onClick={() => setOpenModal(true)} text="Abrir modal" />
                {/* {openModal && <Modal.Success close={closeModal} message="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas" title="Prueba 1 Modal" />} */}
                {/* <Modal.Info close={closeModal}message="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas" title="Prueba 1 Modal"/> */}
                {/* <Modal.Warn message="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas" title="Prueba 1 Modal"/> */}
                {/* <Modal.Error message="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas" title="Prueba 1 Modal"/> */}

                {openModal && <Modal.Form> <Form.Sm onSubmit={onSubmitModal} >
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
                </Modal.Form>}
                {/* {openModal && <Modal.Form>
                <Form.Lg onSubmit={saveInfo} >
                    <Input.Lg label="Nombre" name="smallInput" placerholder="Ingrese un dato" type="text" />
                    <br /><br />
                    <Input.Image name="mainImage" setFile={setMainImage} />
                    <br /><br />
                    <Input.Lg label="Email" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                    <br /><br />
                    <Input.Lg label="Telefono" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                    <br /><br />
                    <Input.Image name="image1" setFile={setImage1} />
                    <br /><br />
                    <Input.Lg label="Telefono" name="smallInput2" placerholder="Ingrese un dato" type="text" />
                    <br /><br />
                    <Button.Send />
                </Form.Lg>
            </Modal.Form>} */}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Container>
        </section>
    )
}