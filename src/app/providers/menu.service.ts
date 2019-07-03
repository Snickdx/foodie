import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService{

  meals = [
    {
      mealId:1,
      name:"Large Stew Chicken Lunch",
      description:"Stew Chicken, fresh salad, pigeon peas, macaroni pie",
      price: 35.00
    },
    {
      mealId:2,
      name:"Large Stew Beef Lunch",
      description:"Stew beef, fresh salad, pigeon peas, macaroni pie",
      price: 40.00
    },
    {
      mealId:3,
      name: "Oxtail Soup",
      description:"Oxtail, provision, dumpling",
      price:30.00
    }
  ];

  mealIndex = 4;
  menuIndex = 4;

  today= new Date();

  schedule = [
    {
      menuId:3, date :new Date(this.today.getTime() - (2*86400000)).toDateString(), list:[
        {
          mealId:1,
          name:"Large Stew Chicken Lunch",
          description:"Stew Chicken, fresh salad, pigeon peas, macaroni pie",
          price: 35.00
        },
        {
          mealId:2,
          name:"Large Stew Beef Lunch",
          description:"Stew beef, fresh salad, pigeon peas, macaroni pie",
          price: 40.00
        },
      ]
    },
    {
      menuId:2, date :new Date(this.today.getTime() - (86400000)).toDateString(), list:[
        {
          mealId:1,
          name:"Large Stew Chicken Lunch",
          description:"Stew Chicken, fresh salad, pigeon peas, macaroni pie",
          price: 35.00
        },
        {
          mealId:2,
          name:"Large Stew Beef Lunch",
          description:"Stew beef, fresh salad, pigeon peas, macaroni pie",
          price: 40.00
        },
      ]
    },
    {
      menuId:3, date :this.today.toDateString(),  list:[
        {
          mealId:1,
          name:"Large Stew Chicken Lunch",
          description:"Stew Chicken, fresh salad, pigeon peas, macaroni pie",
          price: 35.00
        },
        {
          mealId:2,
          name:"Large Stew Beef Lunch",
          description:"Stew beef, fresh salad, pigeon peas, macaroni pie",
          price: 40.00
        },
      ]
    },
    {
      menuId:4, date :new Date(this.today.getTime() + (86400000)).toDateString(), list:[
        {
          mealId:3,
          name: "Oxtail Soup",
          description:"Oxtail, provision, dumpling",
          price:30.00
        }
      ]
    },
    {
      menuId:null, date:new Date(this.today.getTime() - (2*86400000)).toDateString(), list:[]
    },
  ];

  createMeal(meal){
    meal.mealId = this.mealIndex++;
    this.meals.push(meal);
    return this.mealIndex;
  }

  updateMeal(mealId, meal){
    this.meals.forEach((curmeal, idx, array)=>{
      if(curmeal.mealId === mealId)array[idx]=meal;
    })
  }

  deleteMeal(mealId){
    this.meals = this.meals.filter(meal=>meal.mealId !== mealId);
  }

  createMenu(index, menu){
    menu.menuId = this.menuIndex++;
    this.schedule[index] = menu;
  }

  updateMenu(index, newmenu){
    this.schedule[index]= newmenu;
  }lo

  async getMeals(){
    return this.meals;
  }

  async getSchedule(){
    return this.schedule;
  }

}
