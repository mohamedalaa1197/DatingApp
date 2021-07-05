import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/_models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  Cancel(event:boolean){
    this.registerMode=event;
  }

  registerToggle(){
    this.registerMode=!this.registerMode;
  }

}
