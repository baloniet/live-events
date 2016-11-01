import { Component } from '@angular/core';

import {
    FormBuilder,
    FormGroup
} from '@angular/forms';


@Component({
    selector: 'person-form',
    templateUrl: './app/ui/form/person-form.component.html'
})
export class PersonxForm {
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'input1': ['ABC123'],
            'input2': ['a@b.co'],
            date: ''
        });
    }

    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}