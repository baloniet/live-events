import { FormBuilder, FormGroup } from '@angular/forms';
import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'event-modal-content',
  templateUrl: 'eventModal.content.html'
})
export class EventModalContent {
  @Input() name;

  form: FormGroup
  ;
  constructor(public _activeModal: NgbActiveModal, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({

    });
  }
}

@Component({
  selector: 'event-modal-component',
  template: ''
  //template: '<button class="btn btn-lg btn-outline-primary" (click)="open()">Launch demo modal</button>'
})
export class EventModalComponent {
  constructor(private _modalService: NgbModal) {}

  open() {
    const modalRef = this._modalService.open(EventModalContent);
    modalRef.componentInstance.name = 'live-events-event';
  }
}
