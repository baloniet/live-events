import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LabelService } from '../../../shared/data/label.service';
import { PersonApi } from '../../../shared/sdk/services/index';
import { Person } from '../../../shared/sdk/models/index';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'person-form',
    templateUrl: 'form.component.html',
    providers: [LabelService, PersonApi]
})
export class PersonForm implements OnInit {

    private formTitles;
    private formLabels;
    private param;
    private data;
    private isDelete;

    public form: FormGroup;

  //  date = new Date(2016, 5, 10);
    datepickerOpts: any = {
        startDate: new Date(1916, 1, 1),
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: false,
        format: 'd MM yyyy',
        icon: 'fa fa-calendar-o',
        weekStart: 1
    };

    constructor(
        private _labelService: LabelService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _api: PersonApi,
        private _fb: FormBuilder
    ) { }

    ngOnInit() {

        this.isDelete = false;

        this.form = this._fb.group({
            id: [''],
            firstname: [''],
            lastname: [''],
            birthdate: [''],
            cdate: ['']
        });
    
        this._labelService.getLabels('sl', 'person')
            .subscribe(
            res => this.prepareStrings(res),
            err => {
                console.log("LabelService error: " + err);
            });

        this._route.params
            .subscribe(
            res => {
                this.param = res;
                if (this.param.action == 'b'){ 
                    this.isDelete = true;
                    this.form.disable();
                }
                this.selectData(this.param);
            });

    }

    prepareStrings(labels) {
        this.formTitles = labels.titles;
        this.formLabels = labels.properties;
    }

    back() {
        this._router.navigate(['/genlist/person']);
    }

    // send model to service and save to db, return to list
    save(model: Person) {

        if (!this.form.pristine) {
            this._api.upsert(model)
                .subscribe(
                res => this.form.markAsPristine(),
                error => console.log(error),
                () => this.back()
                );
        }

    }

    // call service to find model in db
    selectData(param) {

        if (param.id)
            this._api.findById(param.id)
                .subscribe(res => {
                    this.data = res;
                    
                    (<FormGroup>this.form)
                        .setValue(this.data, { onlySelf: true });
                });
    }

    // delete model with service from db, return to list
    delete(model: Person) {

        this._api.deleteById(model.id)
            .subscribe(
            null,
            error => console.log(error),
            () => this.back()
            );

    }
}