import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    setToken() {

    }

    getToken(): string{
        let token = "";
        return token;
    }
}
