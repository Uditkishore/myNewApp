import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNewApp';
  constructor(){
    setTimeout(()=>{
      this.title = "I am Udit kishor"
    },2000)
  }
}
