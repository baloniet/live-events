import { Injectable } from '@angular/core';
import { Education, Post, Commune, Person } from './domainObjects';

@Injectable()
export class DataService {

    constructor() { }

    getData(id): any[] {
        switch (id) {
            case "post":
                return [
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000),
                    new Post(1, 'Kranj', 4202), new Post(2, 'Ljubljana', 1000), new Post(3, 'Novo Mesto', 6000)
                ];

            case "commune":
                return [
                    new Commune(1, 'Mestna občina Kranj'), new Commune(2, 'Občina Šenčur'), new Commune(3, 'Občina Cerklje')
                ];

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