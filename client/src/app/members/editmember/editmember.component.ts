import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from 'src/_models/Member';
import { User } from 'src/_models/User';
import { AccountService } from 'src/_Services/account.service';
import { MembersService } from 'src/_Services/members.service';

@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.css']
})
export class EditmemberComponent implements OnInit {

  @ViewChild("editForm") editForm : NgForm;
  member : Member;
  user : User;
  @HostListener("window:beforeunload",["$event"]) unloadNotification ($event :any){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }
  constructor(private accountService :AccountService ,
     private memberService : MembersService
     ,private toastr : ToastrService ) {
    this.accountService.currentUser.pipe(take(1)).subscribe(user => {
      this.user = user
    })
   }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    this.memberService.getMemberByName(this.user.userName).subscribe(member => {this.member = member})
  }

  updateProfile(){
    this.memberService.updateMember (this.member).subscribe(()=>{
      console.log(this.member);
      this.toastr.success("Profile Updated Successfully");
      this.editForm.reset(this.member);
    });
      
  }

}
