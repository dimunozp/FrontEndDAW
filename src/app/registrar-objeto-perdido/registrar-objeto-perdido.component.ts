import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, Marker } from 'leaflet';

@Component({
  selector: 'app-registrar-objeto-perdido',
  templateUrl: './registrar-objeto-perdido.component.html',
  styleUrls: ['./registrar-objeto-perdido.component.css']
})
export class RegistrarObjetoPerdidoComponent implements OnInit {

    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
            {
                maxZoom: 18,
                id: 'mapbox.streets'
            }
        ],
        zoom: 16,
        center: latLng(-2.146640, -79.964472)
      };

    constructor() { }

    ngOnInit() {
    }

}
