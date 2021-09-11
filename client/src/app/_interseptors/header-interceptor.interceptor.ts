import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from 'src/_Services/account.service';
import { User } from 'src/_models/User';
import { take } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptorInterceptor implements HttpInterceptor {

  constructor(private accountService : AccountService) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let currentUser :User;
    this.accountService.currentUser.pipe(take(1)).subscribe(user => {currentUser = user });
    
    if(currentUser){
      request = request.clone({
        setHeaders :{
          Authorization : `Bearer ${currentUser.token}`
        }
      })
    }
    return next.handle(request);
  }
}