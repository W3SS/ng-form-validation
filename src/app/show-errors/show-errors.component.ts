/* tslint:disable*/
import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';


@Component({
    selector: 'show-errors',
    templateUrl: './show-errors.component.html',
    styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent {
    private static readonly errorMessages = {

    };

    @Input() private control: AbstractControlDirective | AbstractControl;

    showShowErrors(): boolean {
        return this.control && this.control.errors &&
            (this.control.dirty || this.control.touched);
    }

    listOfErrors(): string[] {
        return Object.keys(this.control.errors)
            .map(field => this.getMessage(field, this.control.errors[field]))
    }

    private getMessage(type: string, params: any) {
        return ShowErrorsComponent.errorMessages[type](params);
    }
}
