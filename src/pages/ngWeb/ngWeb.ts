import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { NavController, Tab, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-ngweb',
    templateUrl: 'ngWeb.html'
})
export class NgWeb {  
    get definition(): any {
        return this.navParams && this.navParams.get("definition");
    }

    constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer) {
    }
    
    public getUrl(): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://angular.io/docs/ts/latest/api/` + this.definition.path);
    }
}