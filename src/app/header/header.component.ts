import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

var bandera = 0;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private httpClient: HttpClient, private route: Router, public location: Location) { }

    ngOnInit() {

    }

    iniciarRecorrido() {
        introJs().start();
    }

    ngAfterViewInit() {
        let boton = document.getElementById('ingreso');
        let botons = document.getElementById('salida');
        if (localStorage.length != 0) {
            this.httpClient.get(`http://192.168.0.24:3000/api/usuarios/${localStorage.getItem('accessToken')}`)
                .subscribe(
                    (data: any) => {
                        if (data.length == 0) {
                            console.log("No exite el usuario");
                        } else {
                            let nombre = data[0].nombreUsuario;
                            boton.innerText = nombre;
                            botons.style.setProperty('display', 'inline');
                            this.route.navigateByUrl('/usuario/perfil', { skipLocationChange: true })
                                .then(() => { this.route.navigate([decodeURI(this.location.path())]) });
                        }
                    })


        } else {
            boton.innerText = "Ingresar";
        }
    }

    logOut() {
        localStorage.removeItem('accessToken');
        let boton = document.getElementById('ingreso');
        let botons = document.getElementById('salida');
        boton.innerText = "Ingresar";
        botons.style.setProperty('display', 'none');

    }

}
