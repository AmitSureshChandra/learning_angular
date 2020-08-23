import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService]
})
export class DirectoryComponent implements OnInit {

  term : string
  users = [
    { 'name' : 'Amit', 'color' : 'blue'},
    { 'name' : 'Suraj', 'color' : 'red'},
    { 'name' : 'Anurag', 'color' : 'green'},
    { 'name' : 'Dheeraj', 'color' : 'yellow'},
  ]

  constructor(private logger : LoggingService) {

  }

  callService(){
    this.logger.log()
  }

  ngOnInit() {

  }

}
