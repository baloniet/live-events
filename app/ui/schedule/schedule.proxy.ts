import {Component,OnInit,ChangeDetectorRef, Input} from '@angular/core';
import {EventService} from '../../shared/data/event.service';


@Component({
    selector: 'schedule',
    template: `<div class="container"><br>
        <le-schedule 
            [events]="events" 
            [header]="header" 
            [eventLimit]="8" 
            [editable]="true" 
            (onDayClick)="handleDayClick($event)"
	        (onEventClick)="handleEventClick($event)">
        </le-schedule></div>`,
    providers: [EventService]
})
export class ScheduleProxy implements OnInit {

   @Input() events: any;
    
    header: any;
    
    event: MyEvent;
    
    dialogVisible: boolean = false;

    defaultView= 'basicDay';
    
    idGen: number = 100;

    bussinesHours: any;
    
    constructor(private eventService: EventService, private cd: ChangeDetectorRef) { }

    ngOnInit() {
       this.events =  this.eventService.getEvents();//.map(res => {this.events = res});
       this.header = {
			left: '',//prev, next, today',
			center: 'title',
			right: 'basicDay'//month,basicWeek,basicDay,agendaWeek,agendaDay,listYear,listMonth,listWeek,listDay'		
        };
        this.defaultView = "basicDay"; ///no tole he treba naštudirat probej ujet kaj se zgodi ko na knof klikneš
    }
    
    handleDayClick(event: any) {
        console.log('day clicked');
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
        
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    }
    
    handleEventClick(e: any) {
        console.log('event clicked');
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if(e.view.name === 'month') {
            start.stripTime();
        }
        
        if(end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }
    
    saveEvent() {
        //update
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.events[index] = this.event;
            }
        }
        //new
        else {
            this.event.id = this.idGen;
            this.events.push(this.event);
            this.event = null;
        }
        
        this.dialogVisible = false;
    }
    
    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if(index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    
    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].id) {
                index = i;
                break;
            }
        }
        
        return index;
    }
}

export class MyEvent {
    id: number;
    title: string;
    start: string;
    end: string;
    allDay: boolean = true;
}