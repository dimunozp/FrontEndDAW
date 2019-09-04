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
    /*
    this.httpClient.post(`http://192.168.0.24:3000/login`,{
      email:user.email,
      password:user.password
    
  },{
    headers: new HttpHeaders({
      "Access-Control-Allow-Methods":"GET, POST",
      "Access-Control-Allow-Origin":"*"
  })
})
    .subscribe(
      (data:any[]) => {
        console.log(data);
    })*/

    fetch("http://192.168.0.24:3000/login", {
            method: 'POST',
            body: JSON.stringify({
              email:user.email,
              password:user.password
            
          }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        })
    .then((data) => data.json())
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))
  }

  ngOnInit() {
  }



}
