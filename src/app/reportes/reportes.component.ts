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
  color:string[] = [];
  descripcion:string[] = [];
  lugar:string[] =[];
  fechaRegistro:string[] =[];
  horaRegistro:string[] =[];

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
    
    this.httpClient.post(`http://192.168.0.24:3000/api/objetosFecha`,{
      fecha:"2019-08-16"
    
  })
    .subscribe(
      (data:any[]) => {
        
        console.log(data);
        if(data.length) {
          data.forEach(element => {
            this.nombre.push(element.nombre);
            this.color.push(element.color);
            this.descripcion.push(element.descripcion);
            this.lugar.push(element.lugar);
            this.fechaRegistro.push(element.fechaRO);
            this.horaRegistro.push(element.horaRegistro);
                        
          });
        }
        
        
        

  })
}

  ngOnInit() {
    
  }

}
