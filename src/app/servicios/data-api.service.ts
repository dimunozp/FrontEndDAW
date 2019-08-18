import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataApiService {

    objetos: Observable<any>;
    objeto: Observable<any>;

    constructor(private http: HttpClient, private authService: AuthService) { }

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

    agregarObjeto(objeto) {
        //TODO: obtener token
        //TODO: not null
        let token = this.authService.getToken();
        const url_api = `?access_token=${token}`;
        /*return this.http.post(url_api,objeto,{headers: this.headers})
            .pipe(map(data=>data));*/
    }

    modificarObjeto(objeto) {
        //TODO: obtener token
        //TODO: not null
        let token = this.authService.getToken();
        const url_api = `?access_token=${token}`;
        /*return this.http.put(url_api,objeto,{headers: this.headers})
            .pipe(map(data=>data));*/

    }

    eliminarObjeto(id: String) {
        //TODO: obtener token
        //TODO: not null
        let token = this.authService.getToken();
        const url_api = `?access_token=${token}`;
        /*return this.http.delete(url_api,{headers: this.headers})
            .pipe(map(data=>data));*/
    }

}
