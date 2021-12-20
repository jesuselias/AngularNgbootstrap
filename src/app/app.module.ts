import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Modal } from '../components/modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { metaReducerLocalStorage, payReduce } from './stateStore/pay.reduce';

@NgModule({
  declarations: [
    AppComponent,
    Modal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ payEntries: payReduce }, { metaReducers: [ metaReducerLocalStorage ] }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
