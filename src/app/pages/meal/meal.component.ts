import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../providers/menu.service';
import {ModalController} from '@ionic/angular';
import {MealmodalComponent} from '../../shared/mealmodal/mealmodal.component';

@Component({
  selector: 'meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {

  meals = [{
    mealId:0,
    name:"loading...",
    description: "loading...",
    price:0.00,
  }];


  constructor(public ms:MenuService, public modal: ModalController) { }

  async addMeal(){
    {
      const modal = await this.modal.create({
        component: MealmodalComponent,
      });
      return await modal.present();
    }
  }

  async deleteMeal(meal){

  }

  async editMeal(meal){
    {
      const modal = await this.modal.create({
        component: MealmodalComponent,
        componentProps: {
          'mealJSON': JSON.stringify(meal)
        }
      });
      return await modal.present();
    }
  }

  async ngOnInit() {
    this.meals = await this.ms.getMeals();
  }

}
