import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import CodeMatrix from '../../../shared/models/code-matrix.model';
import IPayment from '../../../shared/models/domain/payment';


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  public CodeMatrix: CodeMatrix;
  public paymentsCode: string;
  public serviceStatus: boolean;
  public canSetWeightChar: boolean;
  private _weightChar?: string;

  public Payments: IPayment[];

  private refreshObserver = Observable.create((observer) =>{
    const interval = setInterval(() => {
      this.CodeMatrix = new CodeMatrix(this._weightChar);
      this.paymentsCode = this.CodeMatrix.calculateCode();
    }, 2000);
    return () => clearInterval(interval);
  });
  private refreshObserverSubscription: Subscriber<void>;

  private weightObserver = Observable.create((observer) =>{
    const interval = setInterval(() =>{
      this.canSetWeightChar = true;
    }, 4000);
    return () => clearInterval(interval);
  });
  private weightObserverSubscription: Subscriber<void>;


  constructor() {
    this.CodeMatrix = new CodeMatrix(null, true);
    this.serviceStatus = false;
    this.canSetWeightChar = false;
    this.paymentsCode = "- -";
    this.Payments = [];
  }

  public generateMatrix(){
    this.CodeMatrix = new CodeMatrix();
    this.paymentsCode = this.CodeMatrix.calculateCode();
    this.serviceStatus = true;
    this.canSetWeightChar = true;
    this.refreshObserverSubscription = this.refreshObserver.subscribe();
    this.weightObserverSubscription = this.weightObserver.subscribe();
  }

  public stopGenerateMatrix(weightChar?: string){
    this.CodeMatrix = new CodeMatrix(null, true);
    this.serviceStatus = false;
    this.canSetWeightChar = false;
    this.paymentsCode = "- -";
    this.refreshObserverSubscription.unsubscribe();
    this.weightObserverSubscription.unsubscribe();
  }

  public setWeight(weightChar?: string): string{
    if(this.canSetWeightChar){
      this._weightChar = weightChar;
      this.CodeMatrix = new CodeMatrix(this._weightChar); // is correct recreate matrix after setWeight?
      this.canSetWeightChar = false;
    }
    return this._weightChar;
  }

  public createPayment(name: string, amount: number){
    let payment: IPayment = {
      Name: name,
      Amount: amount,
      Code: this.paymentsCode,
      Grid: this.CodeMatrix.Matrix
    };

    this.Payments.push(payment);
  }

}
