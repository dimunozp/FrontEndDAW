import { Component, OnInit } from '@angular/core';
//importacion de ficheros
import { Router,RouterModule } from '@angular/router';
@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    //completar los servicios
    constructor(/*private authService: AuthService private: router: Router*/) { }

    /*private user: UserInterface={
        campos de usuario
    }*/

    ngOnInit() {
    }

    onRegister():void{
        /*this.authService.registerUser(this.user.name y todos los campos que se requieran)
        .suscribe(user=>{
            //console.log(user);
            this.authService.setUser(user);
            let token =user.id;
            this.authService.setToken(token);
            this.router.navigate(['/usuario/perfil'])
        });*/
    }
}
