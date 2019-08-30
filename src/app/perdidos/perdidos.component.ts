import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../servicios/data-api.service';
import { ObjetoInterface } from './../models/objeto-interface';

@Component({
    selector: 'app-perdidos',
    templateUrl: './perdidos.component.html',
    styleUrls: ['./perdidos.component.css']
})
export class PerdidosComponent implements OnInit {

    private objetos:ObjetoInterface;

    //se inyecta el dataApi

    constructor(/*private dataApi: DataApiService*/) { }

    ngOnInit() {
        //this.getTodosObjetos();
    }

    getTodosObjetos(){
        /*this.dataApi.obtenerTodosObjetos()
        .subscribe(objetos=>console.log(objetos));*/
        //dentro de subscribe((objetos: ObjetoInterface)=>this.objetos=objetos));

    }

}
