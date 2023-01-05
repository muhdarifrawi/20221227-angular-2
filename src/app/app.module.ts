import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewoneComponent } from './newone/newone.component';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NewthreeComponent } from './newthree/newthree.component';
import { NewfourComponent } from './newfour/newfour.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { NewfiveComponent } from './newfive/newfive.component';
import { AngFormComponent } from './ang-form/ang-form.component';
import { AngReactiveFormComponent } from './ang-reactive-form/ang-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent,
    NewtwoComponent,
    NewthreeComponent,
    NewfourComponent,
    ErrorcomponentComponent,
    NewfiveComponent,
    AngFormComponent,
    AngReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
