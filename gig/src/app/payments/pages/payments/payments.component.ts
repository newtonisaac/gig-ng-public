import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../../core/services/payments/payments.service';
import { NgForm } from '@angular/forms';
import IPayment from '../../../shared/models/domain/payment';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.sass']
})
export class PaymentsComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Amount', 'Code', 'Grid'];
  dataSource = new MatTableDataSource<IPayment>();

  constructor(public paymentsService: PaymentsService) { }

  ngOnInit(): void {
    this.dataSource.data = this.paymentsService.Payments;
  }

  onAddPayment(form: NgForm){
    if(form.valid){
      this.paymentsService.createPayment(form.value.name, form.value.amount);
      this.dataSource.data = this.paymentsService.Payments; //
    }
  }

}
