import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game.service';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [ListComponent, ViewComponent],
  providers: [GameService]
})
export class GameModule { }
