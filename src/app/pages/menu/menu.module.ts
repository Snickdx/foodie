import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu';
import { SchedulePageRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule
  ],
  declarations: [
    MenuPage
  ],
  entryComponents: []
})
export class MenuModule { }
