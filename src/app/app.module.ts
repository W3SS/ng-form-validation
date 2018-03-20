import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModelFormComponent } from './model-form/model-form.component';

import { FormsModule } from '@angular/forms';
import { ShowErrorsComponent } from './show-errors/show-errors.component';

@NgModule({
    declarations: [
        AppComponent,
        ModelFormComponent,
        ShowErrorsComponent,
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
