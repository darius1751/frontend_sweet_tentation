import { useState } from "react"
import { PropsInputImage } from "./propsInputImage"
import { ImageLoad } from "./ImageLoad";
import { ImageUpload } from "./ImageUpload";

export const Image = ({ name }: PropsInputImage) => {
    const [image, setImage] = useState<string>("");
    const [file, setFile] = useState<File>();
    return (
        <section className="field-input">
            {image ? <ImageLoad setImage={setImage} image={image} name={name} setFile={setFile} /> : <ImageUpload setImage={setImage} name={name} setFile={setFile} />}
            {/* file={file!} */}
        </section>
    )
}