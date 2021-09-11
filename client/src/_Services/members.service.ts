import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from 'src/_models/Member';


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private httpContext : HttpClient) { }

  members : Member[] = [];
  baseURL = environment.apiURL;


  getMembers() : Observable <Member[]> {
    console.log(this.members);
    if(this.members.length > 0) {
      console.log(this.members);
      return of(this.members)};
    return this.httpContext.get<Member[]>(this.baseURL + "users").pipe(
      map(members =>{
        this.members = members;
        return members;
      }
        
      )
    );
  }

  getMemberByName (userName : string) : Observable<Member>{
    var member = this.members.find(m=> m.userName === userName);
    if(member !== undefined) return of(member);
    return this.httpContext.get <Member> (this.baseURL + "users/" + userName)
  }

  updateMember (member : Member){
    return this.httpContext.put(this.baseURL + "users", member,{responseType : 'text'}).pipe(
      map(()=>{
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    );
  }
}
