import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UsuarioInterface } from './../models/usuario-interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "aplication/json"
    });

    registrarUsuario(matricula: string, nombre: string, apellido: string, telefono: string, direccion: string, correo: string, contrasenia: string) {
        const url_api = ""
        return this.http.post<UsuarioInterface>(url_api, {
            matricula: matricula,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            direccion: direccion,
            correo: correo,
            contrasenia:
            contrasenia
        },
        {headers:this.headers}
        )
        .pipe(map(data=>data));
    }

    loginUser(correo:string,contrasenia:string): Observable<any>{
        const url_api = ""
        return this.http.post<UsuarioInterface>(url_api,{
            correo:correo,
            contrasenia:contrasenia
        },
        {
            headers:this.headers
        }
        )
        .pipe(map(data=>data));
    }

    setUser(usuario:UsuarioInterface):void {
        let usuario_string = JSON.stringify(usuario);
        localStorage.setItem("usuarioActual",usuario_string);
    }

    setToken(token):void{
        localStorage.setItem("tokenAcceso",token);
    }

    getToken(): string {
        return localStorage.getItem("tokenAcceso");
    }

    getCurrentUser():UsuarioInterface{
        let usuario_string = localStorage.getItem("usuarioActual");
        if(!isNullOrUndefined(usuario_string)){
            let usuario:UsuarioInterface = JSON.parse(usuario_string);
            return usuario;
        }else{
            return null;
        }
    }

    logoutUser(){
        let tokenAcceso = localStorage.getItem("tokenAcceso");
        const url_api = "";
        localStorage.removeItem("tokenAcceso");
        localStorage.removeItem("usuarioActual");
        return this.http.post<UsuarioInterface>(url_api,
            {headers: this.headers}
            )
    }



}
