import { Component, OnInit } from '@angular/core';
declare let L;
let facultad = "fiec" ;

import { HttpClient } from '@angular/common/http';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-buscar-objeto-perdido',
  templateUrl: './buscar-objeto-perdido.component.html',
  styleUrls: ['./buscar-objeto-perdido.component.css']
})
export class BuscarObjetoPerdidoComponent implements OnInit {
    constructor(private httpClient:HttpClient) { }

    

    ngOnInit() {
        const map = L.map('mapid').setView([-2.146640, -79.964472], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(map);

        var circle = L.circle([-2.144463, -79.967838], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle.bindPopup("FIEC").openPopup();
        circle.onclick=function cambiarNombre(){
            facultad = "fiec";
        }

        var circle2 = L.circle([-2.148636, -79.967612], {
            color: 'yellow',
            fillColor: 'yellow',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle2.bindPopup("CELEX").openPopup();
        circle2.onclick=function cambiarNombre(){
            facultad = "celex";
        }

        var circle3 = L.circle([-2.147180, -79.967793], {
            color: 'brown',
            fillColor: 'brown',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle3.bindPopup("FCSH").openPopup();
        circle3.onclick=function cambiarNombre(){
            facultad = "fcsh";
        }

        var circle4 = L.circle([-2.152011, -79.955884], {
            color: 'green',
            fillColor: 'green',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle4.bindPopup("FCV").openPopup();
        circle4.onclick=function cambiarNombre(){
            facultad = "fcv";
        }

        var circle5 = L.circle([-2.146687, -79.963236], {
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle5.bindPopup("FIMCBOR").openPopup();
        circle5.onclick=function cambiarNombre(){
            facultad = "fimcbor";
        }

        var circle6 = L.circle([-2.146378, -79.967025], {
            color: 'purple',
            fillColor: 'purple',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle6.bindPopup("FCNM").openPopup();
        circle6.onclick=function cambiarNombre(){
            facultad = "fcnm";
        }

        var circle7 = L.circle([-2.145540, -79.965359], {
            color: 'black',
            fillColor: 'black',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle7.bindPopup("FICT").openPopup();
        circle7.onclick=function cambiarNombre(){
            facultad = "fict";
        }

        var circle8 = L.circle([-2.145024, -79.965760], {
            color: 'silver',
            fillColor: 'silver',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle8.bindPopup("FIMCP").openPopup();
        circle8.onclick=function cambiarNombre(){
            facultad = "fimcp";
            console.log(facultad);
        }

        var circle9 = L.circle([-2.143581, -79.962095], {
            color: 'pink',
            fillColor: 'pink',
            fillOpacity: 0.2,
            radius: 20
        }).addTo(map);
        circle9.bindPopup("FADCOM").openPopup();
        circle9.onclick=function cambiarNombre(){
            console.log(facultad);
            facultad = "fadcom";
            console.log(facultad);
        }
    }

    ngAfterViewInit() {
        let circulos = document.getElementsByClassName("leaflet-interactive");
        for(let i=0;i<circulos.length;i++){
            let circulo = circulos[i];
            if(circulo.getAttribute('fill')=='blue'){
                circulo.addEventListener('click',this.onClick.bind(this));
            }else if(circulo.getAttribute('fill')=='#f03'){
                circulo.addEventListener('click',this.onClick2.bind(this));
            }else if(circulo.getAttribute('fill')=='yellow'){
                circulo.addEventListener('click',this.onClick3.bind(this));
            }else if(circulo.getAttribute('fill')=='brown'){
                circulo.addEventListener('click',this.onClick4.bind(this));
            }else if(circulo.getAttribute('fill')=='green'){
                circulo.addEventListener('click',this.onClick5.bind(this));
            }else if(circulo.getAttribute('fill')=='purple'){
                circulo.addEventListener('click',this.onClick6.bind(this));
            }else if(circulo.getAttribute('fill')=='black'){
                circulo.addEventListener('click',this.onClick7.bind(this));
            }else if(circulo.getAttribute('fill')=='silver'){
                circulo.addEventListener('click',this.onClick8.bind(this));
            }else if(circulo.getAttribute('fill')=='pink'){
                circulo.addEventListener('click',this.onClick9.bind(this));
            }
        }
    }
    onClick(event){
        facultad = "fimcbor";
    }
    onClick2(event){
        facultad = "fiec";
    }

    onClick3(){
        facultad = "celex";
    }

    onClick4(){
        facultad = "fcsh";
    }
    onClick5(){
        facultad = "fcv";
    }
    onClick6(){
        facultad = "fcnm";
    }
    onClick7(){
        facultad = "fict";
    }
    onClick8(){
        facultad = "fimcp";
    }
    onClick9(){
        facultad = "fadcom";
    }
}
