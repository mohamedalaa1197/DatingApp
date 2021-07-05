import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/_models/User';
import { AccountService } from 'src/_Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  
  // public get currentUser$() : Observable<User> {
  //   return this.account.currentUser;
  // }
  
  model:any={};
  constructor(public account:AccountService) { }

  ngOnInit(): void {

  }
  
  login(){
    this.account.login(this.model)
        .subscribe(response=>{
          console.log(this.model);
        },error=>{
          console.log("There is an Error");
        });
  }

  logout(){
    this.account.logout();
  }
  
  ///used to subscribe but now we subscribe using async Pipe

  // getCurrentUser(){
  //   this.account.currentUser.subscribe(
  //     user=>this.isLogged=!!user,
  //     error=>console.log("There is an Error"+error),
  //     ()=>console.log("Completed!")
  //   );
  // }
}
