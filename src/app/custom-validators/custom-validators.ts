/* tslint:disable*/
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';

export class CustomValidators {
    static required(c: FormControl) : Promise<ValidationErrors> {
        const message = {
            'required': {
                'message': 'this field is required'
            }
        };

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(c.value === '' ? message : null);
            })
        })
    }
}
