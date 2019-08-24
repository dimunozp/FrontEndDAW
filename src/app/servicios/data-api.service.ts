import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators';
import { ObjetoInterface } from './../models/objeto-interface';

@Injectable({
    providedIn: 'root'
})
export class DataApiService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    objetos: Observable<any>;
    objeto: Observable<any>;

    headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "aplication/json",
        Authorization: this.authService.getToken()
    });
    //aqui van los metodos para solicitar al api

    obtenerTodosObjetos() {
        const url_api = '';
        return this.http.get(url_api);
    }

    obtenerObjetoporId(id: String) {
        const url_api = ``;
        return this.objeto = this.http.get(url_api);
    }
    //api que envia por parametro el url = '?[where][parametro]=loquesequiere'

    agregarObjeto(objeto:ObjetoInterface) {
        //TODO: obtener token
        //TODO: not null
        let token = this.authService.getToken();
        const url_api = `?access_token=${token}`;
        /*return this.http.post<ObjetoInterface>(url_api,objeto,{headers: this.headers})
            .pipe(map(data=>data));*/
    }

    modificarObjeto(objeto:ObjetoInterface) {
        //TODO: obtener token
        //TODO: not null
        let token = this.authService.getToken();
        const url_api = `?access_token=${token}`;
        /*return this.http.put<ObjetoInterface>(url_api,objeto,{headers: this.headers})
            .pipe(map(data=>data));*/

    }

    eliminarObjeto(id: String) {
        //TODO: obtener token
        //TODO: not null
        let token = this.authService.getToken();
        const url_api = `?access_token=${token}`;
        /*return this.http.delete<ObjetoInterface>(url_api,{headers: this.headers})
            .pipe(map(data=>data));*/
    }

}
