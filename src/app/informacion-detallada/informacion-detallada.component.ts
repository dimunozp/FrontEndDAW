import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../servicios/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ObjetoInterface } from '../models/objeto-interface';

declare let L;

@Component({
    selector: 'app-informacion-detallada',
    templateUrl: './informacion-detallada.component.html',
    styleUrls: ['./informacion-detallada.component.css']
})
export class InformacionDetalladaComponent implements OnInit {

    private objeto: ObjetoInterface = {
        nombre: '',
        /*etc sin id*/
    }

    constructor(/*private dataApi: DataApiService, route:ActivatedRoute*/) { }

    ngOnInit() {
        const map2 = L.map('mapid3').setView([-2.146640, -79.964472], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(map2);

        var circle = L.circle([-2.144463, -79.967838], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map2);;
        circle.bindPopup("FIEC").openPopup();

        /*const objeto_id = this.route.snapshot.params["id"]
        this.getDetalles(objeto_id)*/

    }

    getDetalles(id:string){
        /*this.dataApi.getObjetoporId(id)
        .suscribe(objeto =>(this.objeto=objeto));*/
    }

}
