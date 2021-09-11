import { Component, OnInit } from '@angular/core';
import { Member } from 'src/_models/Member';
import { MembersService } from 'src/_Services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
 public members : Member[];
  constructor(private memberService : MembersService) { }
  ngOnInit(): void {
    this.loadMembers();
  }



  loadMembers(){
    this.memberService.getMembers().subscribe(response =>{
      this.members = response;
      console.log(this.members);
    });
  }

}
