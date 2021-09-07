import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  constructor(private context : HttpClient) { }

  baseUrl = 'https://localhost:5001/api/';
  validationErrors :string[] = [];

  get404Error(){
    this.context.get(this.baseUrl + "Buggy/not-found")
        .subscribe( response =>{
          console.log(response);
        }, error =>{
          console.log(error);
        })
  }

  get400Error(){
    this.context.post(this.baseUrl + "account/register",{})
        .subscribe( response =>{
          console.log(response);
        }, error =>{
          console.log(error);
          this.validationErrors = error;
        });
  }

  get501Error(){
    this.context.get(this.baseUrl + "account/bad-request")
        .subscribe( response =>{
          console.log(response);
        }, error =>{
          console.log(error);
        })
  }

  get401Error(){
    this.context.get(this.baseUrl + "Buggy/auth")
        .subscribe( response =>{
          console.log(response);
        }, error =>{
          console.log(error);
        })
  }
  
  get500Error(){
    this.context.get(this.baseUrl + "Buggy/server-error")
        .subscribe( response =>{
          console.log(response);
        }, error =>{
          console.log(error);
        })
  }
  ngOnInit(): void {
  }

}
