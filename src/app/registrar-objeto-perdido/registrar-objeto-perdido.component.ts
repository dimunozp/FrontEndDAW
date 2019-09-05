import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { HttpClient, HttpHeaders, HttpParams,HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { imagenInterface } from '../models/imagen';
import {UploadService} from "../servicios/upload.service"
import { NgForm } from '@angular/forms';
//import { link } from 'fs';


declare let L;
var elementos = document.getElementsByClassName("agregarImagen");
let facultad = "fadcom" ;
let imagene="agregarFoto.png"

@Component({
    selector: 'app-registrar-objeto-perdido',
    templateUrl: './registrar-objeto-perdido.component.html',
    styleUrls: ['./registrar-objeto-perdido.component.css']
})
export class RegistrarObjetoPerdidoComponent implements OnInit {
    private mapaInicializado: boolean = false;
    fileToUpload: File = null;
    imageUrl: string = "../assets/agregarFoto.png";
    url_api: string = "https://api.imgbb.com/1/upload?key=dbb31a86423010cca82ddc9cacac724c";
    api_Key = "dbb31a86423010cca82ddc9cacac724c";
    private imagen: imagenInterface;
    uploadFiles: Array<File>;


    constructor(private httpClient:HttpClient, private uploadService:UploadService) { }

    headers: HttpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded');

    ngOnInit() {
        if (!this.mapaInicializado) {
            const map2 = L.map('mapa').setView([-2.146640, -79.964472], 16);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            }).addTo(map2);

            var circle = L.circle([-2.144463, -79.967838], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);;
            circle.bindPopup("FIEC").openPopup();

            var circle2 = L.circle([-2.148636, -79.967612], {
                color: 'yellow',
                fillColor: 'yellow',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);
            circle2.bindPopup("CELEX").openPopup();

            var circle3 = L.circle([-2.147180, -79.967793], {
                color: 'brown',
                fillColor: 'brown',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);
            circle3.bindPopup("FCSH").openPopup();

            var circle4 = L.circle([-2.152011, -79.955884], {
                color: 'green',
                fillColor: 'green',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);
            circle4.bindPopup("FCV").openPopup();

            var circle5 = L.circle([-2.146687, -79.963236], {
                color: 'blue',
                fillColor: 'blue',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);
            circle5.bindPopup("FIMCBOR").openPopup();

            var circle6 = L.circle([-2.146378, -79.967025], {
                color: 'purple',
                fillColor: 'purple',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);
            circle6.bindPopup("FCNM").openPopup();

            var circle7 = L.circle([-2.145540, -79.965359], {
                color: 'black',
                fillColor: 'black',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);
            circle7.bindPopup("FICT").openPopup();

            var circle8 = L.circle([-2.145024, -79.965760], {
                color: 'silver',
                fillColor: 'silver',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);
            circle8.bindPopup("FIMCP").openPopup();

            var circle9 = L.circle([-2.143581, -79.962095], {
                color: 'pink',
                fillColor: 'pink',
                fillOpacity: 0.2,
                radius: 20
            }).addTo(map2);
            circle9.bindPopup("FADCOM").openPopup();
            this.mapaInicializado = true;
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

    mouseEnter() {
        $(elementos[0]).css("border", "6px solid #7ebd26");
        var elemento = document.getElementById("agregarImagen");
        $(elemento).css("display", "inline-block");
    }

    mouseLeave() {
        $(elementos[0]).css("border", "6px solid #2874A6");
        var elemento = document.getElementById("agregarImagen");
        $(elemento).css("display", "none");
    }

    handleFileInput(file: FileList) {
        this.onFileChange(file);
        this.fileToUpload = file.item(0);
        
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
            let base64: string = this.imageUrl.slice(23);
            this.enviarImgBB(base64, this.api_Key);
        }
        reader.readAsDataURL(this.fileToUpload);
    }

    enviarImgBB(url_base64: string, key: string) {
        let b:FormData =new FormData();
        b.append('key', key);
        b.append('image',url_base64);
        

        /*fetch(this.url_api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: b
        })*/
        /*const body = new HttpParams()
            .set('key', key)
            .set('image', url_base64);
        let b:FormData =new FormData();
        b.append('key', key);
        b.append('image',url_base64);
        return this.http.post(this.url_api, b, { headers: this.headers/*,params: {key:key} }
        )
            .subscribe(
                data => {
                    console.log(data);
                }
            )
            */
    }

    onSubmit(registrarObjetoForm:NgForm):void{
        var registro=registrarObjetoForm.value;
        console.log(registro);
        /*this.onUpload();*/
        var subCat;
        if(registro.sel2=="celulares"){
            subCat="1";
        }if(registro.sel2=="laptop"){
            subCat="2";
        }if(registro.sel2=="billetera"){
            subCat="3";
        }if(registro.sel2=="llaves"){
            subCat="4";
        }if(registro.sel2=="libros"){
            subCat="5";
        }if(registro.sel2=="cuadernos"){
            subCat="6";
        }if(registro.sel2=="tablets"){
            subCat="7";
        }

        this.httpClient.post(`http://192.168.0.24:3000/api/objetos`,{
            nombre:registro.titulo,
            estadoR:"-1",
            fechaRO:registro.fechaHallazgo,
            descripcion:registro.descripcion,
            color:registro.sel3,
            horaRegistro:registro.time,
            eliminadoO:"0",
            calificacionEO:"-1",
            idsubcategoria:subCat,
            idEstudiante:localStorage.getItem("accessToken"),
            lugar:facultad,
            imagen:imagene

        })
        .subscribe(
        (data:any[]) => {
            console.log(data)     
        })


    }




    onUpload(){
        let formData= new FormData();
        if(this.uploadFiles != undefined){
            for ( let i=0; i <this.uploadFiles.length; i++){
                /*imagene= this.uploadFiles[i].name;*/
                console.log(this.uploadFiles[i])
                formData.append("uploads[]", this.uploadFiles[i] , this.uploadFiles[i].name);
            }

            /*Call Service  */
            console.log(formData);
            this.uploadService.uploadFile(formData).subscribe((res)=>{
                console.log('Response:',res);
        });}

    }

    onFileChange(e){
        this.uploadFiles = e;
    }
}
