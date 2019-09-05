import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioInterface } from 'src/app/models/usuario-interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  usuario: UsuarioInterface = {
    nombre: '',        
    apellido:'',        
    correo: '',
    username: '',
    telefono: '',
    direccion: '',    
  }

  ngOnInit() {
    this.perfil();
  }
/*${localStorage.getItem("accessToken")}*/
  perfil(){
    this.httpClient.get(`http://192.168.0.24:3000/api/usuarios/${localStorage.getItem("accessToken")}`)
        .subscribe(
        (data:any[]) => {
          console.log(data)
            data.forEach(element => {
                this.usuario.nombre=element.nombre;
                this.usuario.apellido=element.apellido;
                this.usuario.username=element.nombreUsuario;
                this.usuario.telefono=element.telefono;
                this.usuario.correo=element.correo;
                this.usuario.direccion=element.direccion;

            /*this.imagenes.push(element.imagen);
            this.titulos.push(element.titulo);
            this.descripciones.push(element.contenido);*/
            })                
        })
  }
}
