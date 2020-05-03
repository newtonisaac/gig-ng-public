import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../../core/services/payments/payments.service';
import CodeMatrix from '../../../shared/models/code-matrix.model';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.sass']
})
export class GeneratorComponent implements OnInit {

  public weightChar: string;

  constructor(public paymentsService: PaymentsService) { }

  ngOnInit(): void {}

  public onGenerateMatrix(){
    this.paymentsService.generateMatrix();
  }

  public onStopGenerateMatrix(){
    this.paymentsService.stopGenerateMatrix();
  }

  public onChangeWeight(){
    this.paymentsService.setWeight(this.weightChar);
  }

}
