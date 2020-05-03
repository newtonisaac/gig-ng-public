import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'code-status',
  templateUrl: './code-status.component.html',
  styleUrls: ['./code-status.component.sass']
})
export class CodeStatusComponent implements OnInit {

  @Input() status: boolean;
  @Input() code: string;

  constructor() { }

  ngOnInit(): void {
  }

}
