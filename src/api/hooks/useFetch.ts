import { httpService } from "../utils/http/httpService";
import { useEffect, useState } from "react";

export const useFetch = <T>(url: string, headers?: Record<string, string>): [T, boolean] => {
    const [state, setState] = useState<T>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        httpService.getJson<T>(url, headers).subscribe((data) => setState(data));
        setLoading(false);
    }, []);

    return [state as T, loading];

}