import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { helpers } from 'chart.js';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-new-login',
    templateUrl: './new-login.component.html',
    styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

    constructor(private httpClient: HttpClient,private router:Router,public location:Location) { }


    onSubmit(loginForm: NgForm): void {
        var user = loginForm.value;
        console.log(user.email);
        console.log(user.password);

        this.httpClient.post(`http://192.168.0.24:3000/api/verificarUsuario`, {
            correo: user.email,
            password: user.password

        })
        .subscribe(
            (data: any) => {
                if(data.msg.length==0){
                    console.log("Credenciales Incorrectas");
                }else{
                    console.log(data.msg[0].cedula)
                    localStorage.setItem('accessToken',data.msg[0].cedula);
                    window.location.reload();
                }
            }
        );


    }

    ngOnInit() {
    }
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }


}
