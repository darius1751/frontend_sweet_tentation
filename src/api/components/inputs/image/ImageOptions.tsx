import { faEye, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsImageOptions } from "./propsInputImage";

export const ImageOptions = ({ setFile, setImage, onEditImage }: PropsImageOptions) => {
    const onDeleteImage = () => {
        setImage("");
        setFile(undefined);
    }
    const onViewImage = () => {

    }

    return (
        <article className="input-image-options">
            <article className="input-image-options-actions">
                <FontAwesomeIcon icon={faTrashCan} className="input-image-option-action" onClick={onDeleteImage} />
                <FontAwesomeIcon icon={faEye} className="input-image-option-action" onClick={onViewImage} />
                <FontAwesomeIcon icon={faPen} className="input-image-option-action" onClick={onEditImage} />
            </article>

        </article>
    )
}