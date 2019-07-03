import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MealComponent} from './meal.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MealRoutingModule} from './meal-routing.module';
import {MealmodalComponent} from '../../shared/mealmodal/mealmodal.component';

@NgModule({
  declarations: [
    MealComponent,
    MealmodalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealRoutingModule
  ],
  entryComponents: [MealmodalComponent]
})
export class MealModule { }
