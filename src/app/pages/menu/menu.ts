import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, Events, ModalController, ToastController} from '@ionic/angular';

import { UserData } from '../../providers/user-data';
import {MenuService} from '../../providers/menu.service';
import {MenumodalComponent} from '../../shared/menumodal/menumodal.component';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  styleUrls: ['./menu.scss'],
})
export class MenuPage implements OnInit {


  schedule = [null, null, {
    date:"",
    list:[{
      name:"",
      price:0,
      description:""
    }]
  }];

  selectedIndex = 2;

  loggedIn;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    public toastCtrl: ToastController,
    public menu: MenuService,
    public events: Events,
    public modal: ModalController
  ) { }

  async ngOnInit() {
    this.schedule = await this.menu.getSchedule();
    this.checkLoginStatus();
    this.listenForLoginEvents();
  }

  isFirst(){
    return this.selectedIndex === 0;
  }

  isLast() {
    return this.selectedIndex === this.schedule.length - 1;
  }

  forward(){
    this.selectedIndex++;
  }

  back(){
    this.selectedIndex--;
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  async editMenu(){
    const modal = await this.modal.create({
      component: MenumodalComponent,
      componentProps: {
        'menuJSON': JSON.stringify(this.schedule[this.selectedIndex])
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.schedule[this.selectedIndex] = data;
    return data;
  }

}
