export const validateImageFile = (file: File) => {
    const extensionsValid = ["gif", "png", "jpg", "jpeg", "webp", "svg"];
    const { type } = file;
    const extension = type.split('/')[1];
    if (!extensionsValid.includes(extension))
        throw new Error(`Error type image: ${extension}`);
}