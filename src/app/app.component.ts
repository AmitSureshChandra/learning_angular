import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  msg = 'First try to learn Angular'
  data = "Some Data"

  catchEvent(e){
    alert('event catched')
    console.log(e);
  }
}
