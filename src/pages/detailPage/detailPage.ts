import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { NavController, Tab } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detailPage.html'
})
export class DetailPage {
  code = `
    var x = 2;var x = 2;var x = 2;
    export class Clase{
        constructor(){
          
        }
    }
  `;

  get definition():any{
     return this.navCtrl && (<Tab>this.navCtrl).rootParams && (<Tab>this.navCtrl).rootParams.definition;
  }


  constructor(public navCtrl: NavController, public domSanitizer: DomSanitizer) {

  }
  public getUrl(): SafeResourceUrl {    
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://angular.io/docs/ts/latest/api/`+ this.definition.path);
  }

}
// <div class="video-container">
//     <iframe [src]="updateVideoUrl(video.src)" frameborder="0" allowfullscreen></iframe>
// </div>
// .ts

// import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';

// constructor(public navCtrl: NavController, public sanitizer: DomSanitizationService) {

// }

// updateVideoUrl(id: string) {
//         // Appending an ID to a YouTube URL is safe.
//         // Always make sure to construct SafeValue objects as
//         // close as possible to the input data, so
//         // that it's easier to check if the value is safe.
//         let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0';
//         return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
// }
