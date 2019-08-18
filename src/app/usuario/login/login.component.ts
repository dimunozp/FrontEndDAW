import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(/*private authService:AuthService private router: Router*/) { }
    /*private user:UserInterface={
        propiedades del usuario para iniciar sesion
    }*/
    ngOnInit() {
    }
    onLogin() {
        /*this.authService.loginUser(this.user.correo y todos los campos que se requieran)
        .suscribe(
            data=>{
                //console.log(data);
                this.authService.setUser(data.user);
                let token =data.id;
                this.authService.setToken(token);
                this.router.navigate(['/usuario/perfil'])
            },
            error=>console.log(error)
        );*/
    }

}
