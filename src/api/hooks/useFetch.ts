import { httpService } from "../utils/http/httpService";
import { useEffect, useState } from "react";

export const useFetch = <T>(url: string, headers?: Record<string, string>): T => {
    const [state, setState] = useState<T>();
    useEffect(() => {
        httpService.getJson<T>(url, headers).subscribe((data) => setState(data));
    }, []);

    return state as T;

}