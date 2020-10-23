import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { envConst } from '../helpers/env';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  env = envConst;

  constructor(private httpClient: HttpClient, private cache: CacheService) { }

  isNull(value: string): boolean {
    return (value == null || value == "");
  }

  httpPost(route, param) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.httpClient.post(this.setApiUrl(route), param, { headers, observe: "response" });
  }

  httpGet(route, param = null) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.httpClient.get(param ? `${this.setApiUrl(route)}/${param}` : this.setApiUrl(route), { headers, observe: "response", });
  }

  httpPut(route, param) {
    let headers = new HttpHeaders(); headers = this.createAuthorizationHeader(headers);
    return this.httpClient.put(this.setApiUrl(route), param, { headers, observe: "response" });
  }

  httpDelete(route) {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.httpClient.delete(this.setApiUrl(route), { headers, observe: "response" });
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    if (this.isNull(this.cache.accessToken)) {
      this.cache.accessToken = localStorage.getItem('access_token');
    }

    return headers.append("Authorization", "Bearer " + this.cache.accessToken);
  }

  setApiUrl(route, isLogin = false): string {
    if (isLogin) return this.env.apiEndPoint + route;
    return this.env.apiEndPoint + route;
  }
}