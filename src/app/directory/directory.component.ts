import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  test : boolean = false
  classes : Object = {
    red : true,
    green : false,

    blue : false,
    underline : true,
  }

  constructor() {
  }

  ngOnInit() {
  }

}
