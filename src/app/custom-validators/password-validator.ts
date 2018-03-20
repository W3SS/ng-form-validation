/* tslint:disable*/
import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value;
        let confPassword = AC.get('confPassword').value;

        if ( password != confPassword ) {
            AC.get(confPassword).setErrors({MatchPassword: false});
        } else {
            return null;
        }
    }
}
