import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  endPoint: String = "cep";

  constructor(
    private http: HttpService) { }

  index(param = null) {
    return this.http.httpGet(this.endPoint, param);
  }
  show(id) {
    return this.http.httpGet(this.endPoint, id);
  }
  store(data) {
    return this.http.httpPost(this.endPoint, data);
  }
  update(data, id) {
    return this.http.httpPut(`${this.endPoint}/${id}`, data);
  }
  destroy(id) {
    return this.http.httpDelete(`${this.endPoint}/${id}`);
  }
}