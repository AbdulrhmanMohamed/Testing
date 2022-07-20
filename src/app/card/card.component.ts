import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  message:string = '';

  @Input() data : any
  constructor() { }

  ngOnInit(): void {
  }

  btnClick():string{
    this.message = "Clicked"
    return this.message
  }
}
