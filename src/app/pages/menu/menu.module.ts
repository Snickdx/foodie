import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu';
import { MenuRoutingModule } from './menu-routing.module';
import {MenumodalComponent} from '../../shared/menumodal/menumodal.component';

@NgModule({
  declarations: [
    MenuPage,
    MenumodalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule
  ],
  entryComponents: [MenumodalComponent]
})
export class MenuModule { }
