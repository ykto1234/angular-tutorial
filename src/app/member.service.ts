import { Injectable } from '@angular/core';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable()
export class MemberService {
  getMembers(): Member[] {
    return MEMBERS;
  }
}
