import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleSearchComponent } from './components/schedule-search/schedule-search.component';

const routes: Routes = [{
  path: '',
  component: ScheduleSearchComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
