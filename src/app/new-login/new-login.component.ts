import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { helpers } from 'chart.js';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }


  onSubmit(loginForm:NgForm):void{
    var user = loginForm.value;
    console.log(user.email);
    console.log(user.password);
    
    this.httpClient.post(`http://192.168.0.24:3000/api/verificarUsuario`,{
      correo:user.email,
      password:user.password
    
    },{
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin":"*",
        'Content-Type': 'application/json'
    })
})
    .subscribe(
      (data:any[]) => {
        console.log(data);
    })

    
  }

  ngOnInit() {
  }



}
