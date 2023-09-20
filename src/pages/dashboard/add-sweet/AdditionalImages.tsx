import { useState, MouseEvent, useEffect } from "react";
import { Input } from "../../../api/components/inputs/Input";

export type PropsAdditionalImages = {
    images: (File | undefined)[];
    setImages: React.Dispatch<React.SetStateAction<(File | undefined)[]>>;
}
const MAX_IMAGES: number = 4;
export const AdditionalImages = ({ setImages }: PropsAdditionalImages) => {
    const [image1, setImage1] = useState<File>();
    const [image2, setImage2] = useState<File>();
    const [image3, setImage3] = useState<File>();
    const [image4, setImage4] = useState<File>();
    const [cantImages, setCantImages] = useState<number>(0);
    const [inputsImages, _] = useState<React.JSX.Element[]>([
        <Input.Image name="image2" setFile={setImage2} />,
        <Input.Image name="image3" setFile={setImage3} />,
        <Input.Image name="image4" setFile={setImage4} />,
    ]);
    useEffect(() => {
        setImages([image1, image2, image3, image4]);
    }, []);

    const addImage = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (cantImages < 3)
            setCantImages((cant) => cant + 1);
    }

    const generateInputImages = () => {
        const inputImages: React.JSX.Element[] = [];
        for (let i = 0; i < cantImages; i++) {
            inputImages.push(
                <section key={`additional-input-image${i + 2}`}>
                    {inputsImages[i]}
                    <br /><br />
                </section>);
        }
        return inputImages;
    }

    return (
        <section className="additional-images">
            <h2>Imagenes adicionales</h2>
            <br />
            <section className="additional-images-form">
                <br />
                <strong className="additional-images-form-add" onClick={cantImages == 3 ? undefined : addImage}>
                    + Agregar imagen ({cantImages + 1}/{MAX_IMAGES})
                </strong>
                <br />
                <br />
                <Input.Image name="image1" setFile={setImage1} />
                <br />
                <br />
                {
                    generateInputImages()
                }
            </section>
            <br />
            <br />
            <br />
        </section>
    )
}