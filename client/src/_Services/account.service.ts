import { getLocaleDateFormat, ɵNullViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { User } from 'src/_models/User';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

    baseUrl = environment.apiURL;

    //ReplaySubject ==>it is kind of obeservables where we can store values in 
    // 1==> means we store only 1 Value.
    private currentUserSource=new ReplaySubject<User>(1);

    currentUser = this.currentUserSource.asObservable();

    constructor(private http:HttpClient) { }

  login(model:User){

    return this.http.post<User>(this.baseUrl+'account/login',model)
               .pipe(
                    map((response:User)=>{
                      const user=response;
                      if(user){

                      localStorage.setItem('user',JSON.stringify(user));
                      //To add user to the current user source
                      this.currentUserSource.next(user);

                    }
                  }
                 )
                );
  }

  register(model:any){
    return this.http.post(this.baseUrl+'account/register',model)
           .pipe(
            map((user:User)=>{
              if(user){
                localStorage.setItem('user',JSON.stringify(user));
                this.currentUserSource.next(user);
              }
            })

           )
  }

  setUser(user:User){

    this.currentUserSource.next(user);
    
  }


  logout(){

    localStorage.removeItem('user');
    this.currentUserSource.next(null)

  }

}
