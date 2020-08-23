import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  users = [
    { 'name' : 'Amit', 'color' : 'blue'},
    { 'name' : 'Suraj', 'color' : 'red'},
    { 'name' : 'Anurag', 'color' : 'green'},
    { 'name' : 'Dheeraj', 'color' : 'yellow'},
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
