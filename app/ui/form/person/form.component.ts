import { BasicValidators } from '../../../shared/basicValidators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';

import { LabelService } from '../../../shared/data/label.service';
import { PersonApi, PCitiApi, PPhoneApi, PEmailApi, CitizenshipApi } from '../../../shared/sdk/services/index';
import { Person, PPhone, PEmail,PCiti } from '../../../shared/sdk/models/index';


import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
    private phones: PPhone[];
    private emails: PEmail[];
    private isDelete;

    public form: FormGroup;
    private citItems;
    private citPairs;

    //  date = new Date(2016, 5, 10);
    datepickerOpts: any = {
        startDate: new Date(1916, 1, 1),
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: false,
        format: 'd MM yyyy',
        icon: 'fa fa-calendar-o',
        weekStart: 1,
        placeholder: 'd'
    };

    constructor(
        private _labelService: LabelService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _api: PersonApi,
        private _pCitApi: PCitiApi,
        private _citApi: CitizenshipApi,
        private _phoneApi: PPhoneApi,
        private _emailApi: PEmailApi,
        private _fb: FormBuilder
    ) { }

    ngOnInit() {

        this.isDelete = false;

        this.form = this._fb.group({
            id: [''],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            birthdate: [],
            cdate: [],
            mobileNumber: [''],//validator za številke
            email: [''],// BasicValidators.email],
            commune: [],
            post: [],
            address: [],
            citizenship: '0'
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
                if (this.param.action == 'b') {
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

            // 1. save model - person
            this._api.upsert(model)
                .subscribe(

                res => {
                    
                    //2. save mobileNumber
                    if (this.form.controls['mobileNumber'].touched)
                        this._phoneApi.upsert(
                            new PPhone(
                                { personId: res.id, numbertype: 1, number: (<any>model).mobileNumber }
                            ))
                            .subscribe(null, res => console.log(res));
                    
                    //3. save email
                    if (this.form.controls['email'].touched)
                        this._emailApi.upsert(
                            new PEmail(
                                { personId: res.id, emailtype: 1, email: (<any>model).email }
                            ))
                            .subscribe(null, res => console.log(res));

                    //4. save default citizenship
                    if (this.form.controls['citizenship'].touched){

                    } else this._pCitApi.upsert(
                            new PCiti(
                                { personId: res.id, citizenshipId:0 }
                            ))
                            .subscribe(null, res => console.log(res));

                    this.form.markAsPristine();
                },


                error => console.log(error),
                () => this.back()
                );
        }


    }

    // call service to find model in db
    selectData(param) {

        // get citizenship values
        this._citApi.find({ order: "name" }).subscribe(res => {
            this.citItems = [];
            this.citPairs = [];
            for (let one of res) {
                this.citItems.push({id:one.id,text:one.name});
                this.citPairs.push({id:one.id,value:one.name});
            }
        });

        if (param.id) {
            // get mobileNumber
            Observable.forkJoin(
                this._api.findById(param.id),
                this._api.getPhones(param.id), //filter numbertype=1
                this._api.getEmails(param.id),  //filter emailtype=1
                this._api.getCiti(param.id)
            ).subscribe(
                res => {
console.log('Person',res[3]);
                    this.data = res[0];
                    this.phones = res[1];
                    this.emails = res[2];
                 //   this.citi = res[3];

                    this.data.mobileNumber = this.phones.length > 0 ? this.phones[0].number : '';
                    this.data.email = this.emails.length > 0 ? this.emails[0].email : '';
                    this.data.citizenship = res[3] ? res[3] : '';

                    this.data.commune = '';
                    this.data.post = '';
                    this.data.address = '';

                    (<FormGroup>this.form)
                        .setValue(this.data, { onlySelf: true });
                }, error=>{
                    console.log(error,0)
                }
                );
        }
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

    private citValue = '';

    // methods for cit select
    public refreshValue(value: any): void {
        this.citValue = value;
    }
}