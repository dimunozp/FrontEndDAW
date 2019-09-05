import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../servicios/data-api.service';
import { ObjetoInterface } from './../models/objeto-interface';
import { HttpClient } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Router } from '@angular/router';

@Component({
    selector: 'app-perdidos',
    templateUrl: './perdidos.component.html',
    styleUrls: ['./perdidos.component.css']
})
export class PerdidosComponent implements OnInit {

    private objetos:ObjetoInterface;
    private titulos:string[]=[];
    private descripciones:string[]=[];
    private imagenes:string[]=[];
    private ids:string[]=[];


    //se inyecta el dataApi

    constructor(private httpClient:HttpClient , private router: Router/*private dataApi: DataApiService*/) { }

    ngOnInit() {
        this.getTodosObjetos();
    }

    getTodosObjetos(){
        /*this.dataApi.obtenerTodosObjetos()
        .subscribe(objetos=>console.log(objetos));*/
        //dentro de subscribe((objetos: ObjetoInterface)=>this.objetos=objetos));
        this.httpClient.get(`http://192.168.0.24:3000/api/objetos`)
        .subscribe(
        (data:any[]) => {
            data.forEach(element => {
                if(element.eliminadoO=="1"){
                    this.titulos.push(element.nombre);
                    this.descripciones.push(element.descripcion);
                    this.imagenes.push(element.imagenO);
                    this.ids.push(element.idobjeto)
                    console.log(data)
                }
            /*this.imagenes.push(element.imagen);
            this.titulos.push(element.titulo);
            this.descripciones.push(element.contenido);*/
            })                
        })

        this.httpClient.post(`http://192.168.0.24:3000/prueba`,{})
        .subscribe(
        (data:any[]) => {
            console.log(data)     
        })


    }

}
