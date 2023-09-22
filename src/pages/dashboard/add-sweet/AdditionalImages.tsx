import { MouseEvent } from "react";
import { Input } from "../../../api/components/inputs/Input";

export type PropsAdditionalImages = {
    cantImages: number;
    setCantImages: React.Dispatch<React.SetStateAction<number>>;
    image1: File | undefined;
    setImage1: React.Dispatch<React.SetStateAction<File | undefined>>
    image2: File | undefined;
    setImage2: React.Dispatch<React.SetStateAction<File | undefined>>
    image3: File | undefined;
    setImage3: React.Dispatch<React.SetStateAction<File | undefined>>
    image4: File | undefined;
    setImage4: React.Dispatch<React.SetStateAction<File | undefined>>
}
const MAX_IMAGES: number = 4;
export const AdditionalImages = ({ image1, setImage1, image2, setImage2, image3, setImage3, image4, setImage4, cantImages, setCantImages }: PropsAdditionalImages) => {
    const inputsImages = [
        <Input.Image name="image2" file={image2} setFile={setImage2} />,
        <Input.Image name="image3" file={image3} setFile={setImage3} />,
        <Input.Image name="image4" file={image4} setFile={setImage4} />,
    ];

    // const reset = () => {
    //     setImage1(undefined);
    //     setImage2(undefined);
    //     setImage3(undefined);
    //     setImage4(undefined);
    //     setCantImages(0);
    // }
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
                <Input.Image name="image1" file={image1} setFile={setImage1} />
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