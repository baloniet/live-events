import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form-title',
    templateUrl: 'frmTitle.component.html'
})
export class FrmTitle {
    @Input() param;
    @Input() formTitles;
    @Input() isDelete;
}