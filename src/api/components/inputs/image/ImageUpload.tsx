import { ChangeEvent, useRef } from "react";
import { PropsImageUpload } from "./propsInputImage"
import { AddImageIcon } from "./addImageIcon";
import { validateImageFile } from "../../../utils/validateImageFile";
export const ImageUpload = ({ setImage, setFile, name }: PropsImageUpload) => {
    const $inputFile = useRef<HTMLInputElement>(null);
    const onClick = () => {
        $inputFile.current?.click();
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.currentTarget;
        if (files?.length) {
            const file = files[0];
            validateImageFile(file);
            setImage(URL.createObjectURL(file));
            setFile(file);
        }
    }
    return (
        <article className="input input-image" onClick={onClick}>
            <AddImageIcon />
            <input type="file" name={name} ref={$inputFile} onChange={onChange} hidden />
        </article>
    )
}