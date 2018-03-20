import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-custom-form-validation',
    templateUrl: './custom-form-validation.component.html',
    styleUrls: ['./custom-form-validation.component.scss']
})
export class CustomFormValidationComponent implements OnInit {
    customForm;

    constructor() {
    }

    ngOnInit() {
        this.customForm = new FormGroup({
            contactNam: new FormControl('', [
                Validators.required
            ])
        });
    }

    register(form: NgForm) {

    }
}
