import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  
  nombre:string[] =[];
  age:number[] = [];
  id:number[] = [];
  found:boolean;
  constructor(private httpClient:HttpClient) { }
/*
  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }

  getProfile(){
    console.log(this.name)
    this.httpClient.get(`http://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles`)
    .subscribe(
      (data:any[]) => {

        if(data.length) {
          data.forEach(element => {
            console.log(element)
          });
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }

  postProfile(){
    
    this.httpClient.post(`http://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
    {
       name:"",
       age:""

    })
    .subscribe(
      (data:any[]) => {
 
        if(data.length) {
          data.forEach(element => {
            console.log(element)
          });
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }
*/
  onSubmit(queryForm:NgForm):void{
    var user = queryForm.value;
    
    this.httpClient.post(`http://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
    {
       name:user.name,
       age:21

    })
    .subscribe(
      (data:any[]) => {
        /*
        this.nombre.push(data.name);
        this.age.push(data.age)
        
        console.log(data.length);
        if(data.length) {
          data.forEach(element => {
            console.log("Entro al if")
            console.log(element)
            this.age.concat(element.age);
          });
        }*/
        
        console.log(this.nombre);
        console.log(this.age)

  })
}

  ngOnInit() {
    
  }

}
