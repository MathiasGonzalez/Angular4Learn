import { NgModule, ErrorHandler } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DetailPage } from '../pages/detailPage/detailPage';
import { Code } from '../pages/detailPage/components/code';
import { ItemSelectPage } from '../pages/itemSelectPage/itemSelectPage';
import { HomePage } from '../pages/home/home';
import { BarrelsPage } from '../pages/barrelsPage/barrelsPage';
import { TabsPage } from '../pages/tabs/tabs';
import { NgWeb } from '../pages/ngWeb/ngWeb';
import { Storage } from '@ionic/storage';
import { VisualItemsClient, LocalClient } from "../services/Clients";


@NgModule({
  declarations: [
    MyApp,
    DetailPage,
    ItemSelectPage,
    BarrelsPage,
    TabsPage, 
    HomePage,
    NgWeb,
    Code
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom', 
        platforms: {
          android: {
            tabsPlacement: 'top',
          }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailPage,
    ItemSelectPage,
    BarrelsPage,
    TabsPage,
    HomePage,
    NgWeb
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Storage,
    LocalClient,
    VisualItemsClient
  ]
})
export class AppModule { }
