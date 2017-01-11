import { Component, ViewChild } from '@angular/core';
import { Tabs, NavParams, Tab } from "ionic-angular";
import { BarrelsPage } from '../barrelsPage/barrelsPage';
import { DetailPage } from '../detailPage/detailPage';
import { ItemSelectPage } from '../itemSelectPage/itemSelectPage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild("tabs") tabs: Tabs;

  _rootParams: any;

  get rootParams(): any {
    return this._rootParams;
  }
  set rootParams(val: any) {
    this._rootParams = val;
  }



  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BarrelsPage;
  tab2Root: any = ItemSelectPage;
  tab3Root: any = DetailPage;

  constructor(public navParams: NavParams) {

  }
  tab2RootSelected(tab:Tab) {
 
    setTimeout((() => {
      // this.rootParams = tab.rootParams;
      console.log("tab2RootSelected", this.rootParams);
      // tab.root.barrel = this.rootParams.barrel;
    }).bind(this), 500);
  }
}
