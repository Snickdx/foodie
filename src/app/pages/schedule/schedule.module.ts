import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScheduleComponent} from './schedule.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ScheduleRoutingModule} from './schedule-routing.module';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
