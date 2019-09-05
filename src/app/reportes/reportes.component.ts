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

  onSubmit(queryForm:NgForm):void{
    var user = queryForm.value;
    console.log(user.fechaHallazgo)
    
    this.httpClient.post(`http://192.168.0.24:3000/api/objetosFecha`,{
      fecha:user.fechaHallazgo
    
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
            this.fechaRegistro.push(element.fechaRO.substring(0, 10));
            this.horaRegistro.push(element.horaRegistro);
                        
          });
        }
        
        
        

  })
}

  ngOnInit() {
    
  }

}
