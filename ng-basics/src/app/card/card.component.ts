import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() index: number;

  title = 'Hello Angular !';
  text = 'My sample text';
  disabled = false;
  textColor: string = '';
  textVisibility: boolean = true;

  cardDate: Date = new Date();

  ngOnInit(): void {
    setTimeout(() => {
      this.disabled = true;
    }, 3000);
  }

  changeTitle() {
    this.title = 'Title has been changed';
  }

  // myInputHandler() {
  //   this.textColor = this.title;
  //   console.log(this.textColor);
  // }

  inputChangeHandler() {
    this.textColor = this.title;
    console.log(this.textColor);
  }

  hiddenHandler() {
    this.textVisibility = !this.textVisibility;
    console.log(this.textVisibility);
  }
}
