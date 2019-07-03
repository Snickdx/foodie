import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../providers/menu.service';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'menumodal',
  templateUrl: './menumodal.component.html',
  styleUrls: ['./menumodal.component.scss'],
})
export class MenumodalComponent implements OnInit {

  menu = {
    menuId:undefined,
    date:'',
    list:[]
  };

  meals = [];

  constructor(
    public ms:MenuService,
    public props: NavParams,
    public modal: ModalController
    ) { }

  async ngOnInit() {
    let menuJSON = this.props.get('menuJSON');
    if(menuJSON !== undefined)this.menu = JSON.parse(menuJSON);
    this.meals = await this.ms.getMeals();
    this.meals.forEach(meal=>{
      meal.isChecked = false;
      this.menu.list.forEach(innerMeal=>{
        if(meal.mealId === innerMeal.mealId) meal.isChecked = true;
      });
    });
  }

  save(){
    this.menu.list=[];
    this.meals.forEach(meal=>{
      if(meal.isChecked)this.menu.list.push(meal);
    });
    if(this.menu.menuId === undefined){
      this.ms.createMeal(this.menu);
    }
    this.ms.updateMenu(this.menu.menuId, this.menu);
    this.modal.dismiss(this.menu);
  }

  cancel() {
    this.modal.dismiss();
  }

}
