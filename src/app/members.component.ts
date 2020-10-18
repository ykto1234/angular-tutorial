import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from './member';

import { MemberService } from './member.service';

@Component({
  selector: 'my-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  title = '自社社員名簿';
  members: Member[];
  selectedMember: Member;

  constructor(
    private memberService: MemberService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // constructorが実行された後、初期化時に呼ばれるコールバック
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.memberService.getMembers().then(members => this.members = members);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMember.id]);
  }
}
