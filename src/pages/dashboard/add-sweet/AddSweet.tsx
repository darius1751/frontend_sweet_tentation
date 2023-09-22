import { useState } from "react";
import { Container } from "../../../api/components/Container";
import { Form } from "../../../api/components/forms/form";
import { Input } from "../../../api/components/inputs/Input";
import { useForm } from "../../../api/hooks/useForm";
import { Sweet } from "../../../models/Sweet";
import { List } from "../../../api/components/list/List";
import { Category } from "../../../models/Category";
import { useFetch } from "../../../api/hooks/useFetch";
import { URLS } from "../../../constants/urls";
import { AdditionalImages } from "./AdditionalImages";
import { Button } from "../../../api/components/buttons/Button";

const initialSweet: Sweet = {
    name: '',
    price: 0,
    categories: [],
    description: ''
}
export const AddSweet = () => {
    const [onChange, { name, price, description }, setSweet] = useForm(initialSweet);
    const [categories] = useFetch<Category[]>(URLS.FIND_ALL_CATEGORIES);
    const [categoriesIds, setCategoriesIds] = useState<string[]>([]);
    const [mainImage, setMainImage] = useState<File>();
    const [cantImages, setCantImages] = useState<number>(0);
    const [image1, setImage1] = useState<File>();
    const [image2, setImage2] = useState<File>();
    const [image3, setImage3] = useState<File>();
    const [image4, setImage4] = useState<File>();
    const addSweet = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    const cleanForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSweet(initialSweet);
        setCategoriesIds(() => []);
        setImage1(() => undefined);
        setImage2(() => undefined);
        setImage3(() => undefined);
        setImage4(() => undefined);
        setMainImage(() => undefined);
        setCantImages(0);
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
                    <Input.Image name="mainImage" file={mainImage} setFile={setMainImage} />
                </section>

                <List.SelectMultiple
                    label="Categorias:"
                    list={categories?.map?.(({ id, name }) => ({ text: name, value: id }))}
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
                <AdditionalImages
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    image4={image4}
                    setImage1={setImage1}
                    setImage2={setImage2}
                    setImage3={setImage3}
                    setImage4={setImage4}
                    cantImages={cantImages}
                    setCantImages={setCantImages}
                />
                <section className="add-sweet-btns">
                    <Button.Save />
                    <Button.Preview />
                    <Button.Clean onClick={cleanForm} />
                </section>
            </Form.Lg>
        </Container>
    )
}