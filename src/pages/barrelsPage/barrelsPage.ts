import { Component } from '@angular/core';
import { NavController, Platform, Alert, AlertController, Tab, Tabs, NavOptions, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//https://www.thepolyglotdeveloper.com/2015/12/use-sqlite-in-ionic-2-instead-of-local-storage/
import { SQLite } from 'ionic-native';
import { Network } from 'ionic-native';
import {LocalClient, ApiDefinition, VisualItemsClient, FirstVisualItems } from "../../services/Clients";
import { BasePage } from '../basePage';
import { BaseViewModel } from "../../viewModels/baseViewModel";






@Component({
    selector: 'page-barrels',
    templateUrl: 'barrelsPage.html',
    // providers: [VisualItemsClient, LocalClient]
})
export class BarrelsPage extends BasePage {
    toppings: any;
    networkState: string = "Check Network";

    barrels: Array<string> = [];

    tabs: any;

    /**
     * CTOR
     * @param navCtrl
     * @param storage
     * @param platform
     */
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public storage: Storage,
        public platform: Platform,
        public alertCtrl: AlertController,
        public visualItemsClient: VisualItemsClient,
        public localClient: LocalClient) {

        super();

        this.loadBarrelItems();


        this.ViewModel = new BaseViewModel();

        //CARGAR MODELO DESDE LOCAL STORAGE
        storage.get("model").then(((val: BaseViewModel) => {
            if (!this.isNull(val))
                this.ViewModel.title = val.title + " loaded";
            else {
                setTimeout((() => {
                    storage.get("model").then(((val: BaseViewModel) => {
                        this.ViewModel.title = val.title + " filled";
                    }).bind(this))

                }).bind(this), 3000);
            }
        }).bind(this))

        this.ViewModel.title = "MODEL TITLE";

        storage.set("model", this.ViewModel);


        // usar directamente SQLite
        //ionic plugin add cordova-sqlite-storage
        // platform.ready().then(() => {
        //     console.log("platform ready");
        //     let db = new SQLite();
        //     db.openDatabase({
        //         name: "data.db",
        //         location: "default"
        //     }).then(() => {
        //         db.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)", {}).then((data) => {
        //             console.log("TABLE CREATED: ", data);
        //         }, (error) => {
        //             console.error("Unable to execute sql", error);
        //         })
        //     }, (error) => {
        //         console.error("Unable to open database", error);
        //     });
        // });
    }
    /**
     * 
     * @param url
     */
    onLink(url: string) {
        window.open(url);
    }
    /**
     * 
     * @param infiniteScroll
     */
    doInfinite(infiniteScroll: any) {
        setTimeout(() => {
            infiniteScroll.complete();
        }, 1500);
    }
    loadBarrelItems() {
        this.localClient.getLocalApiDefinition().subscribe((data: any) => {

            for (let prop in data) {
                this.barrels.push(prop);
               // console.log((<ApiDefinition[]>data[prop]).map(x => x.title))
            }
        })
    }
    /**
     * 
     */
    public checkNetwork(): void {

        this.visualItemsClient.first(undefined, 2, undefined).subscribe((data: FirstVisualItems) => {
            console.log(data);
        })


        console.log('network connected!');
        this.platform.ready().then((() => {
            let alert = this.alertCtrl.create({
                title: "Connection Status",
                subTitle: <string>Network.connection,
                buttons: ["OK"]
            });
            alert.present();        
        }).bind(this));
    }

    goToTab(index: number, barrel: string) {
        //this.navParams.data = { barrel: barrel };

        (<Tabs>this.navCtrl.parent).select(index);
        
        (<Tabs>this.navCtrl.parent).getByIndex(index).rootParams = { barrel: barrel };

        setTimeout((() => {            
        }).bind(this), 500);

        console.log((<Tabs>this.navCtrl.parent).getByIndex(index).rootParams);
    }


}
