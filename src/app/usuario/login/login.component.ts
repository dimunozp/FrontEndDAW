import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { UsuarioInterface } from 'src/app/models/usuario-interface';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService:AuthService,private router:Router ) { }
    private user: UsuarioInterface={
        direccion: "",
        contrasenia:"",
        /*propiedades del usuario para iniciar sesion*/
    };
    ngOnInit() {
    }
    onLogin() {
        this.authService.loginUser(this.user.correo,this.user.contrasenia /*y todos los campos que se requieran*/)
        .subscribe(
            data=>{
                console.log(data);
                this.authService.setUser(data.user);
                let token =data.id;
                this.authService.setToken(token);
                this.router.navigate(['/usuario/perfil'])
            },
            error=>console.log(error)
        );
    }

}
