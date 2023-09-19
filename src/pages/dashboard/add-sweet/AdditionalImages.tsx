import { useState, MouseEvent } from "react";
import { Input } from "../../../api/components/inputs/Input";

export type PropsAdditionalImages = {
    images: File[];
    setImages: React.Dispatch<React.SetStateAction<File[]>>;
}
export const AdditionalImages = ({ setImages }: PropsAdditionalImages) => {
    const [image1, setImage1] = useState<File>();
    const [image2, setImage2] = useState<File>();
    const [image3, setImage3] = useState<File>();
    const [image4, setImage4] = useState<File>();
    const addImage = (e: MouseEvent<HTMLElement>) => { 
        
    }
    return (
        <section className="additional-images">
            <h2>Imagenes adicionales</h2>
            <br />
            <section className="additional-images-form">
                <br />
                <strong className="additional-images-form-add" onClick={addImage}>
                    + Agregar imagen (1/4)
                </strong>
                <br />
                <br />
                <Input.Image name="image1" setFile={setImage1} />
                <br />
                <br />
            </section>
            <br />
            <br />
            <br />
        </section>
    )
}