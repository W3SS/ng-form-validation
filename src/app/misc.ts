/* tslint:disable*/
import {NgForm} from '@angular/forms';

export class Misc {
    addCustomerForm: NgForm;
    public findInvalidControls() {
        const invalid = [];
        const controls = this.addCustomerForm.controls;

        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }


        return invalid;
    }
}

let simple = new Misc();
simple.findInvalidControls();
