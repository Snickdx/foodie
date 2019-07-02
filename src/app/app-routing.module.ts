import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'meals',
    loadChildren: './pages/meal/meal.module#MealModule'
  },
  {
    path: 'mymenu',
    loadChildren: './pages/mymenu/mymenu.module#MymenuModule'
  },
  {
    path: 'schedule',
    loadChildren: './pages/schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
