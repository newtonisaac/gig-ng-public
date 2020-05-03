import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorComponent } from './payments/pages/generator/generator.component';
import { PaymentsComponent } from './payments/pages/payments/payments.component';


const routes: Routes = [
  { path: 'generator', component: GeneratorComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: '', redirectTo: '/generator', pathMatch: 'full' },
  { path: '**', component: GeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
