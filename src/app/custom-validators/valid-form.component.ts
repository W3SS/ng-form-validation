/* tslint:disable*/

import { PasswordValidation } from './password-validator';
import { FormBuilder, Validators } from '@angular/forms';

export class ValidFormComponent {
    public form;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            password: ['', Validators.required],
            confPassword:['', Validators.required]
        }, {
            validator: PasswordValidation.MatchPassword
        })
    }
}
