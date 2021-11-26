import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() disease:string;
  @Input() url:any
  @Output() backEvent =new EventEmitter<boolean>();
  constructor() {
    this.disease=""
   }

  ngOnInit(): void {
  }
  back():void{
    this.backEvent.emit(true)
  }
}
