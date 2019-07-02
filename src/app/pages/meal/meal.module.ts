import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MealComponent} from './meal.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MealRoutingModule} from './meal-routing.module';

@NgModule({
  declarations: [MealComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealRoutingModule
  ]
})
export class MealModule { }
