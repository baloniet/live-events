import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'form-button',
    templateUrl: 'frmBtn.component.html'
})
export class FrmBtn {
    @Input() form;
    @Input() formTitles;
    @Input() isDelete;

    @Output() onBack = new EventEmitter();
    @Output() onSave = new EventEmitter();
    @Output() onDelete = new EventEmitter();

    back(){
        this.onBack.emit();
    }

    save(form: any){
        this.onSave.emit(form);
    }

    delete(form: any){
        this.onDelete.emit(form);
    }
}