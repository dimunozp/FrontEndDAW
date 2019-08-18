import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../servicios/data-api.service';

@Component({
    selector: 'app-perdidos',
    templateUrl: './perdidos.component.html',
    styleUrls: ['./perdidos.component.css']
})
export class PerdidosComponent implements OnInit {

    //se inyecta el dataApi

    constructor(/*private dataApi: DataApiService*/) { }

    ngOnInit() {
        //this.getTodosObjetos();
    }

    getTodosObjetos(){
        /*this.dataApi.obtenerTodosObjetos()
        .subscribe(objetos=>console.log(objetos));*/

    }

}
