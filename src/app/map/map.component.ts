import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styles: []
})
export class MapComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    let mapProp = {
      center: new google.maps.LatLng(25.687635,-100.310326),
      zoom:14
    };

    let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }

}
