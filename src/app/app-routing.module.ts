import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  {
    path: '',
    redirectTo: '/scheduleSearch',
    pathMatch: 'full',
  },
  {
    path: 'scheduleSearch',
    loadChildren: () =>
      import('./schedules/schedule.module').then((m) => m.ScheduleModule),
  },
];

const mainRoutes: Routes = [
  {
    path: '',
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
