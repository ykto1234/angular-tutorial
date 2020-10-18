import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">ダッシュボード</a>
      <a routerLink="/members">社員一覧</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = '自社社員名簿';
}
