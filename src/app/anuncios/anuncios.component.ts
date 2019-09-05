import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  private imagenes:string[]=[];
  private titulos:string[]=[];
  private descripciones:string[]=[];

  ngOnInit() {
    
    this.httpClient.get(`http://192.168.0.24:3000/api/anuncios`)
    .subscribe(
      (data:any[]) => {
        data.forEach(element => {
          this.imagenes.push(element.imagen);
          this.titulos.push(element.titulo);
          this.descripciones.push(element.contenido);
        })                
    })
    console.log(this.imagenes);
/*
    this.httpClient.post(`http://192.168.0.24:3000/api/imagenes`,{
      imagen:"bienvenida.jpg"
    })
    .subscribe(
      (data:any[]) => {
        console.log(data)                
    })
    this.loadImage();*/
    
  }
/*
  loadImage(){
    this.httpClient.post('http://192.168.0.24:3000/api/imagenes',{
      imagen:"bienvenida.jpg"
      })
      .subscribe(
        (data:any[]) => {
          console.log(data)
      })        
  }
*/
}
