import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from 'src/_models/Member';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private httpContext : HttpClient) { }

  baseURL = environment.apiURL;
  getMembers() : Observable <Member[]> {

    return this.httpContext.get<Member[]>(this.baseURL + "users");
  }

  getMemberByName (userName : string) : Observable<Member>{

    return this.httpContext.get <Member> (this.baseURL + "users/" + userName)
  }
}
