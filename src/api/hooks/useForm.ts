import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialState: T): [(e: ChangeEvent<HTMLInputElement>) => void, T, React.Dispatch<T>] => {
    const [state, setState] = useState<T>(initialState);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setState((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value
        }));
    }
    return [
        onChange,
        state,
        setState,
    ]
}