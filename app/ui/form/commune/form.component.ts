import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LabelService } from '../../../shared/data/label.service';


import {
    FormBuilder,
    FormGroup
} from '@angular/forms';

@Component({
    selector: 'post-form',
    templateUrl: './app/ui/form/commune/template.html',
    providers: [LabelService]
})
export class CommuneForm implements OnInit {

    private formTitles;
    private formLabels;
    private id;

    constructor(
        private _labelService: LabelService,
        private _router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this._labelService.getLabels('sl', 'commune')
            .subscribe(
            res => this.prepareStrings(res),
            err => {
                console.log("LabelService error: " + err);
            });

        this.route.params
            .subscribe(
            res => {
                this.id = res;
                if (this.id.id == "new")
                    this.id = '';
                else
                    this.id = this.id.id; // tu pride še load, this.                        selectData(this.id)
            });

    }

    prepareStrings(labels) {
        this.formTitles = labels.titles;
        this.formLabels = labels.properties;
    }

    back() {
        this._router.navigate(['/genlist/commune']);
    }

    save() {
        console.log("save clicked, not implemented");
    }
}

// iz servicea podatke o obstoječem zapisu in jih prikaži če !isNew

// save --> service save
// kasneje še heci z gumbi