import { MouseEvent } from "react";

export interface PropsInputImage {
    name: string;
    setFile: React.Dispatch<React.SetStateAction<File | undefined>>
}
export interface PropsImageLoad extends PropsImageUpload {
    image: string;
}
export interface PropsImageUpload {
    name: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
    setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export interface PropsAddImageIcon {
    className?: string;
}
export interface PropsImageOptions {
    setImage: React.Dispatch<React.SetStateAction<string>>;
    onEditImage: (e: MouseEvent) => void;
}