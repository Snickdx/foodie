import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../../providers/menu.service';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'meal-modal',
  templateUrl: './mealmodal.component.html',
  styleUrls: ['./mealmodal.component.scss'],
})
export class MealmodalComponent implements OnInit {

  meal = {
    mealId: undefined,
    name:"",
    items: [],
    price:0.00,
  };

  constructor(public ms:MenuService, public props: NavParams, public modal: ModalController) {

  }

  save(){
    if(this.meal.mealId === undefined){
      this.ms.createMeal(this.meal);
    }
    this.ms.updateMeal(this.meal.mealId, this.meal);
    this.modal.dismiss(this.meal);
  }

  async ngOnInit() {
    let mealJSON = this.props.get('mealJSON');
    if( mealJSON !== undefined) this.meal = JSON.parse(mealJSON);
  }

  cancel() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modal.dismiss();
  }
}
