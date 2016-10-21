import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
// Service provides events for Scheduler aka Calendar, this are not mouse events:)


@Injectable()
export class EventService {
    testData
    constructor() { //private http: Http) {
        this.testData =
            {
                "data": [
                    {
                        "id": 1,
                        "title": "Kako pravilno dihati",
                        "start": "2016-10-03T18:00",
                        "end": "2016-10-03T19:30",
                        "color": "salmon"
                    },
                    {
                        "id": 2,
                        "title": "O zdravih prehranskih navadah, živilih in življenskem slogu",
                        "start": "2016-10-07T18:00",
                        "end": "2016-10-07T19:30",
                        "color": "salmon"
                    },
                    {
                        "id": 3,
                        "title": "Organizirani pohodi: Ogled Pirčeve barvarne",
                        "start": "2016-10-10T17:00",
                        "end": "2016-10-10T19:00",
                        "color": "salmon"
                    },
                    {
                        "id": 4,
                        "title": "Eterična olja doTERRA",
                        "start": "2016-10-11T18:00",
                        "end": "2016-10-11T19:30",
                        "color": "salmon"
                    },
                    {
                        "id": 5,
                        "title": "Dan odprtih vrat medgeneracijskega centra",
                        "start": "2016-10-12",
                        "color": "tan"
                    },
                    {
                        "id": 6,
                        "title": "Kje so meje v medgeneracijskih odnosih?",
                        "start": "2016-10-12T18:00",
                        "end": "2016-10-12T19:30",
                        "color": "salmon"
                    },
                    {
                        "id": 7,
                        "title": "Južnoafriška republika",
                        "start": "2016-10-14T18:00",
                        "end": "2016-10-14T19:30",
                        "color": "salmon"
                    },                    
                    {
                        "id": 8,
                        "title": "Delavnica za mlade",
                        "start": "2016-10-10T18:00:00",
                        "color": "SeaGreen"
                    },
                     {
                        "id": 9,
                        "title": "Delavnica za mlade",
                        "start": "2016-10-17T18:00:00",
                        "color": "SeaGreen"
                    },
                     {
                        "id": 10,
                        "title": "Delavnica za mlade",
                        "start": "2016-10-24T18:00:00",
                        "color": "SeaGreen"
                    },
                     {
                        "id": 11,
                        "title": "Delavnica za mlade",
                        "start": "2016-10-31T18:00:00",
                        "color": "SeaGreen"
                    },
                    {
                        "id": 12,
                        "title": "Pusti strah, sledi srcu",
                        "start": "2016-10-19T17:30",
                        "end": "2016-10-19T20:00",
                        "color": "salmon"
                    }  ,
                    {
                        "id": 13,
                        "title": "Družabni večer - TOMBOLA",
                        "start": "2016-10-21T18:00",
                        "end": "2016-10-12T19:30",
                        "color": "salmon"
                    }             ,
                    {
                        "id": 14,
                        "title": "Ego - naš navidezni prijatelj",
                        "start": "2016-10-25T17:00",
                        "end": "2016-10-25T19:00",
                        "color": "salmon"
                    }    ,
                    {
                        "id": 15,
                        "title": "Vaje za spomin",
                        "start": "2016-10-26T10:00",
                        "end": "2016-10-26T12:00",
                        "color": "salmon"
                    }     ,
                    {
                        "id": 16,
                        "title": "Ustvarjalna delavnica za noč čarovnic",
                        "start": "2016-10-26T15:00",
                        "end": "2016-10-26T16:30",
                        "color": "salmon"
                    }     ,
                    {
                        "id": 17,
                        "title": "Izdelava nagrobnih aranžmajev",
                        "start": "2016-10-27T17:00",
                        "end": "2016-10-27T19:00",
                        "color": "salmon"
                    }    ,
                     {
                        "id": 18,
                        "title": "Delavnica za mlade",
                        "start": "2016-10-04T18:00",
                        "end": "2016-10-04T19:30",
                        "color": "olive"
                    },
                    {
                        "id": 19,
                        "title": "Delavnica za mlade",
                        "start": "2016-10-11T18:00",
                        "end": "2016-10-11T19:30",
                        "color": "olive"
                    },{
                        "id": 20,
                        "title": "Delavnica za mlade",
                        "start": "2016-10-18T18:00",
                        "end": "2016-10-18T19:30",
                        "color": "olive"
                    },
                    {
                        "id": 21,
                        "title": "Delavnica za mlade",
                        "start": "2016-10-25T18:00",
                        "end": "2016-10-25T19:30",
                        "color": "olive"
                    },
                    {
                        "id": 22,
                        "title": "Delavnica za mlade",
                        "start": "2016-11-01T18:00",
                        "end": "2016-11-01T19:30",
                        "color": "olive"
                    },{
                        "id": 23,
                        "title": "Delavnica za mlade",
                        "start": "2016-09-27T18:00",
                        "end": "2016-09-27T19:30",
                        "color": "olive"
                    },
                     {
                        "id": 24,
                        "title": "Joga z Iris",
                        "start": "2016-09-29T09:00",
                        "end": "2016-09-29T10:30",
                        "color": "goldenrod"
                    },
                    {
                        "id": 19,
                        "title": "Joga z Iris",
                         "start": "2016-10-06T09:00",
                        "end": "2016-10-06T10:30",
                        "color": "goldenrod"
                    },{
                        "id": 20,
                       "title": "Joga z Iris",
                         "start": "2016-10-13T09:00",
                        "end": "2016-10-13T10:30",
                        "color": "goldenrod"
                    },
                    {
                        "id": 21,
                         "title": "Joga z Iris",
                         "start": "2016-10-20T09:00",
                        "end": "2016-10-20T10:30",
                        "color": "goldenrod"
                    },
                    {
                        "id": 22,
                         "title": "Joga z Iris",
                        "start": "2016-10-27T09:00",
                        "end": "2016-10-27T10:30",
                        "color": "goldenrod"
                    },{
                        "id": 23,
                         "title": "Joga z Iris",
                        "start": "2016-11-03T09:00",
                        "end": "2016-11-03T10:30",
                        "color": "goldenrod"
                    },
                  
                ]
            };
    }

    getEvents() {
        console.log(this.testData);
        return this.testData.data;

    }
}