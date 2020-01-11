import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TaskComponent } from './task.component';

const routes: Routes = [{
  path: '',
  component: TaskComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
