import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { CheckAuthService } from '../auth/check-auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private auth: CheckAuthService,
    private spinner: NgxSpinnerService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    this.spinner.show();
    console.log('INTERCEPTOR');
    const token: any = this.auth.getToken();
    console.log(token);
    let apiReq;
    if (token) {
      // newHandeler = newHandeler.append('apiToken', token);
      apiReq = req.clone({
        params: req.params.set('auth-token', token),
        setHeaders: {
          Authorization: token
        }
      });
    } else {
      apiReq = req.clone({
        params: req.params.set('auth-token', 'noToken'),
        setHeaders: {
          Authorization: 'noToken'
        }
      });
    }

    return next.handle(apiReq).pipe(tap(
      event => console.log(event),
      error => {
        if (error.status === 404) {
          console.log(error);
        }
      }
    ),
      finalize(() => {
        this.spinner.hide();
      }));
  }
}
