
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../common/common.module';
import { DashboardComponent } from './dashboard.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TaskComponent
  ],
  imports: [
    FormsModule,
    TaskRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class TaskModule { }
