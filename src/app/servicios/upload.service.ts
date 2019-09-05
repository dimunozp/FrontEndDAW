import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  uploadFile(formData){
    let urlApi = 'http://192.168.0.24:3000/api/upload';
    return this.http.post(urlApi, formData);
  }
}
