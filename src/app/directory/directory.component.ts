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
  name : string
  color : string

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
      if ( this.users && snapshot && !this.users.filter(v =>  v.name === snapshot.val().name && v.color === snapshot.val().color)){
        this.users.push(snapshot.val())
      }
    })
  }

  addDataToFirebase(){

    if (!(this.name && this.color)){
      alert('provide Name & Tag Color')
      return
    }

    // let length = this.users.length+1
    // firebase.database().ref('').push({
    //   name : this.name,
    //   color : this.color
    // })

    this.users.push({
      name : this.name,
      color : this.color
    })
  }
}
