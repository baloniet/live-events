import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private _url = "http://jsonplaceholder.typicode.com/albums";

    constructor(private _http: Http) { }

    getData() {
        return this._http.request(this._url).map(res => res.json());
    }

}