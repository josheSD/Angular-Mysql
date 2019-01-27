import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { ErrorComponent } from './components/error/error.component';




const routes: Routes = [
    {path: '',       component: GameListComponent},
    {path: 'games',  component:GameListComponent},
    {path: 'games/add', component:GameFormComponent},
    {path: 'games/edit/:id', component: GameFormComponent},
    {path: '**', component: ErrorComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
