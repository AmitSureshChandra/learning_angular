import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../services/logging.service';
import {DataService} from '../services/data.service';
import any = jasmine.any;
declare var firebase : any;

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
    this.loadDataFromFireabase()
  }

  loadDataFromFireabase(){
    firebase.database().ref('/').on('child_added',(snapshot)=>{
      if (!this.users.filter(v => v.name === snapshot.val().name && v.color === snapshot.val().color)){
        this.users.push(snapshot.val())
      }
    })
  }
}
