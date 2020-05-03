import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { GeneratorComponent } from './pages/generator/generator.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: true,
  clearIfNotMatch: true
};

@NgModule({
  declarations: [GeneratorComponent, PaymentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,

    SharedModule,
  ],
  exports:[ GeneratorComponent, PaymentsComponent ],
})
export class PaymentsModule { }
