import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { TaskpageComponent } from './components/taskpage/taskpage.component';

const routes: Routes = [
  {path: '' , component: BoardComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {path: 'task/:name/:id' , component: TaskpageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
