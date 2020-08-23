import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../services/logging.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers : [DataService]
})
export class DirectoryComponent implements OnInit {

  term : string
  users = []

  constructor(private logger : LoggingService, private data : DataService) {
    this.data.getData().subscribe(
      v => this.users = v
    )
  }

  callService(){
    this.logger.log()
  }

  ngOnInit() {

  }



}
