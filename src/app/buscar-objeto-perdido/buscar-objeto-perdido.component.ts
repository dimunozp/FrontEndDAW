import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, Marker } from 'leaflet';

@Component({
  selector: 'app-buscar-objeto-perdido',
  templateUrl: './buscar-objeto-perdido.component.html',
  styleUrls: ['./buscar-objeto-perdido.component.css']
})
export class BuscarObjetoPerdidoComponent implements OnInit {
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
