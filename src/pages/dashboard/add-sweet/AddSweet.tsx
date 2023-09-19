import { useState } from "react"
import { Container } from "../../../api/components/Container"
import { Form } from "../../../api/components/forms/form"
import { Input } from "../../../api/components/inputs/Input"
import { useForm } from "../../../api/hooks/useForm"
import { Sweet } from "../../../models/Sweet"
import { List } from "../../../api/components/list/List"
import { AdditionalImages } from "./AdditionalImages"

const initialSweet: Sweet = {
    name: '',
    price: 0,
    categories: [],
    description: ''
}
export const AddSweet = () => {
    const [onChange, { name, price, description }, _] = useForm(initialSweet);
    // const [categories, setCategories] = useFetch();
    const categories: [] = [];
    const [categoriesIds, setCategoriesIds] = useState<string[]>([]);
    const [__, setMainImage] = useState<File>();
    const [images, setImages] = useState<File[]>([]);
    const addSweet = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <Container className="add-sweet">
            <Form.Lg onSubmit={addSweet}>
                <section className="row">
                    <Input.Md
                        label="Nombre del postre"
                        name="name"
                        onChange={onChange}
                        value={name}
                        placerholder="Ingrese el nombre del postre"
                        classNameField="add-sweet_input"
                    />

                    <Input.Md
                        label="Precio del postre"
                        name="price"
                        onChange={onChange}
                        value={price ? price : ""}
                        type="number"
                        placerholder="Ingrese el precio del postre"
                        classNameField="add-sweet_input-rg"
                    />
                </section>

                <section className="add-sweet_main-image">
                    <h2>Imagen principal</h2>
                    <br />
                    <Input.Image name="mainImage" setFile={setMainImage} />
                </section>

                <List.SelectMultiple
                    label="Categorias:" list={categories}
                    placeholder="Elija las categorias del postre"
                    values={categoriesIds}
                    setValues={setCategoriesIds}
                    classNameField="add-sweet_input"
                />
                <br />
                <Input.TextArea
                    label="Descripcion:"
                    placerholder="Ingrese la descripcion del postre"
                    name="description"
                    maxLength={255}
                    value={description}
                    onChange={onChange}
                    classNameField="add-sweet_input"
                />

                <AdditionalImages images={images} setImages={setImages} />
            </Form.Lg>
        </Container>
    )
}