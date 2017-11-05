import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSearch: boolean = false;

  DisplaySearch(display:boolean){
    this.showSearch = display;

    // if(display)
    //   console.log("Display search menu");
    // else
    //   console.log("Hide search menu");
  }
}
