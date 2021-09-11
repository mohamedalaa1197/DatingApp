import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/_models/Member';
import { MembersService } from 'src/_Services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

 public members :Observable<Member[]>;

  constructor(private memberService : MembersService) { }
  ngOnInit(): void {
    this.members = this.memberService.getMembers();
  }



 
}
