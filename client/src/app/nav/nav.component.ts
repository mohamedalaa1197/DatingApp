import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public account:AccountService ,
              private router : Router,
              private toastr : ToastrService) { }

  ngOnInit(): void {

  }
  
  login()
  {
    this.account.login(this.model)
        .subscribe(response=>{
          console.log(this.model);
          this.router.navigateByUrl("/members");
        });
  }

  logout(){
    this.account.logout();
    this.router.navigateByUrl("/");
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
