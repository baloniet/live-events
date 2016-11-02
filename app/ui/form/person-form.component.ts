import { Component } from '@angular/core';


import {
    FormBuilder,
    FormGroup
} from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'person-form',
    templateUrl: 'person-form.component.html'
})
export class PersonxForm {
    personForm: FormGroup;

    date: Date;
    datepickerOpts: any = {
        startDate: new Date(1916, 1, 1),
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: false,
        format: 'd MM yyyy',
        icon: 'fa fa-calendar-o'
    };

    constructor(fb: FormBuilder) {
        this.personForm = fb.group({
            'input1': ['ABC123'],
            'input2': ['a@b.co'],
            bdate: ''
        });
    }

    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}