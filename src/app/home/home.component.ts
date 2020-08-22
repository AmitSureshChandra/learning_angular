import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})


export class HomeComponent implements OnInit {


  @Input() data
  @Output() onYell = new EventEmitter()
  
  constructor() { }

  clickMe(){
    alert('You Clicked Me')
  }

  ngOnInit() {
  }

  emitEvent(e){
    this.onYell.emit(e)
  }

}
