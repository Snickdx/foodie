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

    getItems(){

    }

    createItem(){

    }

    createMenu(){

    }

    updateMenu(){

    }

    deleteMenu(){

    }

    updatItem(){

    }

    deleteItem(){

    }

    scheduleMenu(){

    }

    getSchedule(){
      let date= new Date();
      return [
        {date :date.toDateString(),  menu:[
            {
              name:"Large Stew Chicken Lunch",
              items:[
                {
                  id:1,
                  name:"Vegetable Rice",
                  description:""
                },
                {
                  id:2,
                  name:"Stew Chicken",
                  description:""
                },
                {
                  id:3,
                  name:"Fresh Salad",
                  description:""
                },
                {
                  id:4,
                  name:"Read Beans",
                  description:""
                }
              ],
              price: 35.00
            },
            {
              name:"Large Stew Beef Lunch",
              items:[
                {
                  id:1,
                  name:"Vegetable Rice",
                  description:""
                },
                {
                  id:5,
                  name:"Stew Beef",
                  description:""
                },
                {
                  id:3,
                  name:"Fresh Salad",
                  description:""
                },
                {
                  id:4,
                  name:"Read Beans",
                  description:""
                }
              ],
              price: 40.00
            },
          ]},
        {date :new Date(date.getTime() - (1*86400000)).toDateString(), menu:[
            {
              name:"Large Stew Chicken Lunch",
              items:[
                {
                  id:1,
                  name:"Vegetable Rice",
                  description:""
                },
                {
                  id:2,
                  name:"Stew Chicken",
                  description:""
                },
                {
                  id:3,
                  name:"Fresh Salad",
                  description:""
                },
                {
                  id:4,
                  name:"Read Beans",
                  description:""
                }
              ],
              price: 35.00
            },
            {
              name:"Large Stew Beef Lunch",
              items:[
                {
                  id:1,
                  name:"Vegetable Rice",
                  description:""
                },
                {
                  id:5,
                  name:"Stew Beef",
                  description:""
                },
                {
                  id:3,
                  name:"Fresh Salad",
                  description:""
                },
                {
                  id:4,
                  name:"Read Beans",
                  description:""
                }
              ],
              price: 40.00
            },
          ]},
        {date :new Date(date.getTime() - (2*86400000)).toDateString(), menu:[
            {
              name:"Large Stew Chicken Lunch",
              items:[
                {
                  id:1,
                  name:"Vegetable Rice",
                  description:""
                },
                {
                  id:2,
                  name:"Stew Chicken",
                  description:""
                },
                {
                  id:3,
                  name:"Fresh Salad",
                  description:""
                },
                {
                  id:4,
                  name:"Read Beans",
                  description:""
                }
              ],
              price: 35.00
            },
            {
              name:"Large Stew Beef Lunch",
              items:[
                {
                  id:1,
                  name:"Vegetable Rice",
                  description:""
                },
                {
                  id:5,
                  name:"Stew Beef",
                  description:""
                },
                {
                  id:3,
                  name:"Fresh Salad",
                  description:""
                },
                {
                  id:4,
                  name:"Read Beans",
                  description:""
                }
              ],
              price: 40.00
            },
          ]},
        {date :new Date(date.getTime() - (3*86400000)).toDateString(), menu:[
            {
              name:"Large Stew Chicken Lunch",
              items:[
                {
                  id:1,
                  name:"Vegetable Rice",
                  description:""
                },
                {
                  id:2,
                  name:"Stew Chicken",
                  description:""
                },
                {
                  id:3,
                  name:"Fresh Salad",
                  description:""
                },
                {
                  id:4,
                  name:"Read Beans",
                  description:""
                }
              ],
              price: 35.00
            },
            {
              name:"Large Stew Beef Lunch",
              items:[
                {
                  id:1,
                  name:"Vegetable Rice",
                  description:""
                },
                {
                  id:5,
                  name:"Stew Beef",
                  description:""
                },
                {
                  id:3,
                  name:"Fresh Salad",
                  description:""
                },
                {
                  id:4,
                  name:"Read Beans",
                  description:""
                }
              ],
              price: 40.00
            },
          ]}
      ]
    }



}
