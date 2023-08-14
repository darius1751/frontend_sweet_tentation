export const validateImageFile = (file: File) => {
    const extensionsValid = ["gif", "png", "jpg", "jpeg", "webp", "svg"];
    const { type, size } = file;
    const extension = type.split('/')[1];

    if (!extensionsValid.includes(extension))
        throw new Error(`Error type image: ${extension}`);
    if (size > 2000000)
        throw new Error(`Error size image, ${size / 1000000}MB > 2MB`);
}