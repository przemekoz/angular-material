import { Component } from '@angular/core';

@Component({
  template: `
    <h2>Root Game component!</h2>
    <div style="width:33%;float:left">
        <app-game-category></app-game-category>
    </div>
    <div style="width:66%;float:left">
        <router-outlet></router-outlet>
    </div>
    `,
})
export class GameComponent { }
