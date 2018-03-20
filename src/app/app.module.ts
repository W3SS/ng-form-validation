import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModelFormComponent } from './model-form/model-form.component';

import { FormsModule } from '@angular/forms';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { UniqueNameValidatorDirective } from './directives/unique-name-validator.directive';
import { CustomFormValidationComponent } from './custom-form-validation/custom-form-validation.component';
import { ValidFormComponent } from './custom-validators/valid-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ModelFormComponent,
        ShowErrorsComponent,
        UniqueNameValidatorDirective,
        CustomFormValidationComponent,
        ValidFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
