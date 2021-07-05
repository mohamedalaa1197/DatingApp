import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/_models/User';
import { AccountService } from 'src/_Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'client';

  constructor(private http:HttpClient,private account:AccountService){}

  users:any;  

  ngOnInit(): void {
    // this.getUsers();

    //We get the user to the local storage to stay logged in while we are in the app component
    this.setCurrentUser();
  }

  setCurrentUser(){

    const user:User =JSON.parse(localStorage.getItem('user'));
    console.log(user);
    this.account.setUser(user);

  }

  // getUsers(){
  //   this.http.get("https://localhost:5001/api/users").subscribe(response=>{
  //    this.users=response
  //   },error=>{console.log("There is an Error"+error)});
  // }

}
