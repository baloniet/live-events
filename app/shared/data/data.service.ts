import { Injectable } from '@angular/core';
import { Post } from  './domainObjects';

@Injectable()
export class DataService {
    
    constructor() { }

    getPosts() {
        return [
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000),
            new Post(1,'Kranj',4202), new Post(2,'Ljubljana',1000), new Post(3,'Novo Mesto',6000)

            
        ]
    }

}