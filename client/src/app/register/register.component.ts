import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/_Services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //To recive data from parent
  @Output() cancelRegister=new EventEmitter();
  
  constructor(private account:AccountService
              ,private toastr : ToastrService) { }

  model:any={};

  register(){
    this.account.register(this.model).subscribe(response=>{

      console.log(response);
      this.cancel();
    },error=>{

    console.log("There is an Error"+error)
    this.toastr.error(error.error)
  })
  }

  cancel(){
    this.cancelRegister.emit(false);
 }

  ngOnInit(): void {
  }

 

}
