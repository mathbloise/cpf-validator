import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from '../services/cache.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ValidTokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private cache: CacheService, private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.cache.accessToken == null) {
            this.router.navigateByUrl('/login');
        }
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                    if (error.status === 401) {
                        this.cache.accessToken = null;
                        this.authService.showMenuEmitter.emit(false);
                        this.authService.userAuth = false;
                        this.router.navigateByUrl('/login');
                    }
                    return throwError(errorMsg);
                })
            )
    }

}