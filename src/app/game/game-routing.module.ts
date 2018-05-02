import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { TopComponent } from './top/top.component';

const gameRoutes: Routes = [

    {
        path: 'games',
        component: GameComponent,
        children: [
            {
                path: '',
                component: TopComponent,
            },
            {
                path: 'detail/:key',
                component: DetailComponent
            },
            {
                path: 'category/:key',
                component: ListComponent
            }
        ]
    }
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
