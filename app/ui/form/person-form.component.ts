import { Component } from '@angular/core';

import {
    FormBuilder,
    FormGroup
} from '@angular/forms';


@Component({
    selector: 'person-form',
    templateUrl: './app/ui/form/person-form.component.html'
})
export class PersonForm {
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['ABC123']
        });
    }

    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}