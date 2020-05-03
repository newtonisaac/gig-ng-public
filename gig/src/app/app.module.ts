import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { PaymentsModule } from './payments/payments.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    CoreModule,
    SharedModule,
    PaymentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
