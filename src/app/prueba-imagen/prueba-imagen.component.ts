import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-prueba-imagen',
  templateUrl: './prueba-imagen.component.html',
  styleUrls: ['./prueba-imagen.component.css']
})
export class PruebaImagenComponent implements OnInit {
  private image:ImageSelected =  null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onUploadFinish(event) {
    console.log(event);
    this.image = new ImageSelected;
    this.image.image = event.src;
    this.image.name = event.file.name;
  }

  sendImage(){    
    if(this.image != null){
      console.log('send image');
      this.http.post('http://192.168.0.24:3000/upload3', {
        file: this.image.image,
        name: this.image.name
      }).subscribe((d) => {
        console.log(d);
      })
    }
  }
}

class ImageSelected {
  public name: String;
  public image: String;
}