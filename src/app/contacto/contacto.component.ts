import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  onSubmit(contactoForm:NgForm):void{
    var contacto = contactoForm.value;
    console.log(contacto);
    console.log(contacto.correo);
    console.log(contacto.asunto);
   
    this.httpClient.post(`http://192.168.0.24:3000/api/enviar`,{
      correo:contacto.correo,
      asunto:contacto.asunto,
      texto: contacto.correo+"\n"+contacto.mensaje
    
  })
    .subscribe(
      (data:any[]) => {
        console.log(data)              

  })
}

  ngOnInit() {
  }



}

