import { EventEmitter, Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint: String = "auth";
  userAuth : boolean = false;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpService) { }

  login(param = null) {
    return this.http.httpPost(`${this.endPoint}/login`, param);
  }

  logout() {
    return this.http.httpPost(`${this.endPoint}/logout`, {});
  }
}