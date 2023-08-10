export interface List {
    value: string | number;
    text: string;
}
export interface PropsList {
    list: List[];
    values: string[] | number[];
    setValues: React.Dispatch<React.SetStateAction<string[]>> | React.Dispatch<React.SetStateAction<number[]>>;
}
export interface PropsSelectMultiple {
    list: List[];
    label: string;
    placeholder: string;
    values: string[] | number[];
    setValues: React.Dispatch<React.SetStateAction<string[]>> | React.Dispatch<React.SetStateAction<number[]>>;
}
export interface PropsItem {
    text: string;
    value: string | number;
    values: any[];
    setValues: React.Dispatch<React.SetStateAction<string[]>> | React.Dispatch<React.SetStateAction<number[]>>;
}