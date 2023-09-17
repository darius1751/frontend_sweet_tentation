import { Observable } from "rxjs";
import { AjaxResponse, ajax } from "rxjs/ajax";

class HttpService {

    public getJson<T>(url: string, headers?: Record<string, string>): Observable<T> {
        return ajax.getJSON<T>(url, headers);
    }

    public get<T>(url: string, headers?: Record<string, string>): Observable<AjaxResponse<T>> {
        return ajax.get<T>(url, headers);
    }

    public post<T>(url: string, body: any, headers?: Record<string, string>): Observable<AjaxResponse<T>> {
        return ajax.post<T>(url, body, headers);
    }

    public patch<T>(url: string, body: any, headers?: Record<string, string>): Observable<AjaxResponse<T>> {
        return ajax.patch<T>(url, body, headers);
    }

    public put<T>(url: string, body: any, headers?: Record<string, string>): Observable<AjaxResponse<T>> {
        return ajax.put<T>(url, body, headers);
    }

    public delete<T>(url: string, headers: Record<string, string>): Observable<AjaxResponse<T>> {
        return ajax.delete<T>(url, headers);
    }
}
export const httpService: HttpService = new HttpService();