import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LabelService } from '../../../shared/data/label.service';

import { PostApi } from '../../../shared/sdk/services/index';
import { Post } from '../../../shared/sdk/models/index';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'post-form',
    templateUrl: 'template.html', ///./app/ui/form/post/
    providers: [LabelService, PostApi]
})
export class PostForm implements OnInit {

    private formTitles;
    private formLabels;
    private id;
    private post;

    public form: FormGroup;
    public submitted: boolean;


    constructor(
        private _labelService: LabelService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _postApi: PostApi,
        private _fb: FormBuilder
    ) { }

    ngOnInit() {

        this.form = this._fb.group({
            id: [''],
            name: [''],
            zipcode: ['']
        });

        this._labelService.getLabels('sl', 'post')
            .subscribe(
            res => this.prepareStrings(res),
            err => {
                console.log("LabelService error: " + err);
            });

        this._route.params
            .subscribe(
            res => {
                this.id = res;
                this.id = this.id.id;
                this.selectData(this.id);
            });

    }

    prepareStrings(labels) {
        this.formTitles = labels.titles;
        this.formLabels = labels.properties;
    }

    back() {
        this._router.navigate(['/genlist/post']);
    }

    save(model: Post) {
        this.submitted = true;
        if (!this.form.pristine) {
            console.log("save clicked, not implemented: ", model);
            this._postApi.upsert(model)
                .subscribe(
                res => {
                    console.log(res),
                        this.form.markAsPristine()
                },
                error => console.log(error)
                );
        }
    }

    selectData(id) {

        if (id)
            this._postApi.findById(id)
                .subscribe(res => {
                    this.post = res;
                    (<FormGroup>this.form)
                        .setValue(this.post, { onlySelf: true });
                });
    }
}

// iz servicea podatke o obstoječem zapisu in jih prikaži če !isNew

// save --> service save
// kasneje še heci z gumbi