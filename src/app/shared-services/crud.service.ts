import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CrudService {
    httpHeaders: HttpHeaders;

    constructor(private http: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    }

    get(url, params) {
        return this.http.get(url, { params });
    }

    post(url, data) {
        return this.http.post(url, data, { headers: this.httpHeaders, withCredentials: true });
    }

    upload(url, data) {
        return this.http.post(url, data, { withCredentials: true });
    }

    delete(url) {
        return this.http.delete(url, { headers: this.httpHeaders, withCredentials: true });
    }

    put(url, data) {
        return this.http.put(url, data, { headers: this.httpHeaders, withCredentials: true });
    }
}
