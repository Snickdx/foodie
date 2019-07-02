import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import {MenuPage} from '../menu/menu';
import {MenuModule} from '../menu/menu.module';


@NgModule({
  imports: [
    AboutModule,
    MenuModule,
    CommonModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage
  ]
})
export class TabsModule { }
