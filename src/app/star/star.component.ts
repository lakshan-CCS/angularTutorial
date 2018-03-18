import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  
  @Input() rating: number;
  @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating*86/5;  
  }

  OnClick() : void{
    this.ratingClicked.emit(`Rating is ${this.rating} was clicked!`);
  }

}
