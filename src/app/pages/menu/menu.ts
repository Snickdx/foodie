import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import {MenuService} from '../../providers/menu.service';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  styleUrls: ['./menu.scss'],
})
export class MenuPage implements OnInit {


  schedule = [];
  selectedIndex = 0;


  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public toastCtrl: ToastController,
    public menu: MenuService,
    public user: UserData
  ) { }

  ngOnInit() {
    this.schedule = this.menu.getSchedule();
  }

  isFirst(){
    return this.selectedIndex === 0;
  }

  isLast() {
    return this.selectedIndex === this.schedule.length - 1;
  }

  forward(){
    if(!this.isFirst())this.selectedIndex--;
    console.log(this.selectedIndex);
  }

  back(){
    if(!this.isLast())this.selectedIndex++;
    console.log(this.selectedIndex);
  }
}
