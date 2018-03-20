/* tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Contact } from './contact.model';

@Component({
    selector: 'app-model-form',
    templateUrl: './model-form.component.html',
    styleUrls: ['./model-form.component.scss']
})
export class ModelFormComponent implements OnInit {
    simpleForm : FormGroup;
    contact: Contact;
    constructor() {
    }

    ngOnInit() {
        this.simpleForm = new FormGroup({
            name: new FormGroup({
                firstName: new FormControl('', Validators.required),
                lastName: new FormControl('', Validators.required)
            }),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")
            ]),
            password: new FormControl('', [
                Validators.minLength(8),
                Validators.required
            ]),
            language: new FormControl()
        })
    }

    register(form: NgForm) {
        console.log(form.value);
    }

}
