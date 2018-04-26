import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const gameRoutes: Routes = [
    { path: 'game-list', component: ListComponent },
    { path: 'game-view/:key', component: ViewComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(gameRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GameRoutingModule { }
