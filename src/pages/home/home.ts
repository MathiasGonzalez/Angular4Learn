import { Component } from "@angular/core";
import { NavController, Platform, Alert, AlertController, Tab, Tabs, NavOptions, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//https://www.thepolyglotdeveloper.com/2015/12/use-sqlite-in-ionic-2-instead-of-local-storage/
import { SQLite } from 'ionic-native';
import { Network } from 'ionic-native';
import {LocalClient, ApiDefinition, VisualItemsClient, FirstVisualItems } from "../../services/Clients";
import { BasePage } from '../basePage';
import { TabsPage } from '../tabs/tabs';
import { BaseViewModel } from "../../viewModels/baseViewModel";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
      constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public storage: Storage,
        public platform: Platform,
        public alertCtrl: AlertController,
        public visualItemsClient: VisualItemsClient,
        public localClient: LocalClient) 
    {
        
    }
    goToApi() {
        this.navCtrl.push(TabsPage);
    }
}