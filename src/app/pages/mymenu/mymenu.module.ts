import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MyMenuRoutingModule} from './myumenu-routing.module';
import {MymenuComponent} from './mymenu.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [MymenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMenuRoutingModule
  ]
})
export class MymenuModule { }
