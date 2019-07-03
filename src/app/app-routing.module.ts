import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  },
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
    path: 'tabs',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
