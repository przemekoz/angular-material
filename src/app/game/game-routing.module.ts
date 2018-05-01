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
                component: ListComponent,
                children: [
                    {
                        path: ':key',
                        component: DetailComponent
                    },
                    {
                        path: '',
                        component: TopComponent
                    }
                ]
            }
        ]
    }

    // { path: 'games/category/:key', component: BaseComponent },
    // { path: 'games/view/:key', component: BaseComponent },
    // { path: 'games', component: BaseComponent },
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
