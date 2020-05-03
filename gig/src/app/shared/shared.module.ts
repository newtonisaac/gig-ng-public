import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeStatusComponent } from './components/code-status/code-status.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CodeStatusComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [CodeStatusComponent]
})
export class SharedModule { }
