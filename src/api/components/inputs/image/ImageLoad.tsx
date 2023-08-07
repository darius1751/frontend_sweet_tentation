import { ChangeEvent, useRef, useState } from "react";
import { PropsImageLoad } from "./propsInputImage"
import { ImageOptions } from "./ImageOptions";
import { validateImageFile } from "../../utils/validateImageFile";

export const ImageLoad = ({ image, name, setImage, setFile }: PropsImageLoad) => {
    const $inputFile = useRef<HTMLInputElement>(null);
    const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
    const onMouseEnter = () => setVisibleOptions(true);
    const onMouseLeave = () => setVisibleOptions(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.currentTarget;
        if (files?.length) {
            const file = files[0];
            validateImageFile(file);
            setFile(file);
            setImage(URL.createObjectURL(file));
        }
    }
    const onEditImage = () => {
        $inputFile.current?.click();
    }
    return (
        <article className="input input-image input-image-load" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={image} />
            {visibleOptions && <ImageOptions setImage={setImage} onEditImage={onEditImage} />}
            <input type="file" name={name} ref={$inputFile} hidden onChange={onChange} />
        </article>
    )
}