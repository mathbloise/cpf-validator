import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ValidTokenInterceptor } from './valid-token-interceptor';

export const httpInterceptProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ValidTokenInterceptor, multi: true }
]