import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService{

  getMenu(){

  }

  getMenus(){
    return []
  }




  createMeal(meal){

  }

  updateMeal(id, meal){

  }

  createMenu(menu){

  }

  updateMenu(id, menu){

  }

  deleteMenu(id){

  }

  async getMeals(){
    return [
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
    ]
  }


  scheduleMenu(){

  }

  async getSchedule(){
    let date= new Date();
    return [
      {date :date.toDateString(),  menu:[
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
        ]},
      {date :new Date(date.getTime() - (1*86400000)).toDateString(), menu:[
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
        ]},
      {date :new Date(date.getTime() - (2*86400000)).toDateString(), menu:[
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
        ]}
    ]
  }



}
