import { Injectable } from '@angular/core';
import { Education, Commune, Person } from './domainObjects';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

    constructor() { }

    getData(id): any {
        let data: any;


        switch (id) {
            case "education":
                return [
                    new Education(1, "Osnovnošolska izobrazba"), new Education(2, "Srednješolska izobrazba"), new Education(3, "Univerzitetna izobrazba"), new Education(4, "Magisterij"), new Education(5, "Doktorat")
                ];

            case "person":
                return [
                    new Person(1, "Janez", "Banez"), new Person(2, "Tone", "Baloni"), new Person(3, "Mirko", "Radirko"), new Person(4, "Cveta", "Marjeta"), new Person(5, "Tina", "Malina")
                ];

            default:
                break;
        }
    }

}