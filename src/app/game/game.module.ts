import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game.service';
import { ListComponent } from './list/list.component';
import { GameRoutingModule } from './game-routing.module';
import { CategoryComponent } from './category/category.component';
import { TopComponent } from './top/top.component';
import { MaterialModule } from '../material/material.module';
import { GameComponent } from './game.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    GameRoutingModule
  ],
  declarations: [ListComponent, CategoryComponent, TopComponent, GameComponent, DetailComponent],
  providers: [GameService]
})
export class GameModule { }
