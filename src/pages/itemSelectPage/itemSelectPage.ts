import { Component, AfterViewInit, ReflectiveInjector, Inject } from '@angular/core';

import { NavController, NavParams, Tab, Tabs } from 'ionic-angular';
import { BasePage } from '../basePage';
import { NgWeb } from '../ngWeb/ngWeb';
import { BaseViewModel } from "../../viewModels/baseViewModel";
import { VisualItemsClient, LocalClient, ApiDefinition } from "../../services/Clients";


@Component({
  selector: 'page-item-select',
  templateUrl: 'itemSelectPage.html',
})
export class ItemSelectPage extends BasePage {
  _barrel: string;
  searchTerm: string = "";
  get barrel(): string {
    let ret: string = "";
    ret = this.navCtrl && (<Tab>this.navCtrl).rootParams && (<Tab>this.navCtrl).rootParams.barrel;
    if (this._barrel !== ret) {
      this.loadItems(ret);
    }
    this._barrel = ret;
    return ret;
  }

  items: Array<ApiDefinition> = [];
  all_items: Array<ApiDefinition> = [];
  constructor(
    public navCtrl: NavController,
    public visualItemsClient: VisualItemsClient,
    public localClient: LocalClient
  ) {
    super();
  }

  loadItems(barrel: string): void {
    this.localClient && this.localClient.getLocalApiDefinition().subscribe(((data: any) => {
      this.items = (<ApiDefinition[]>data[barrel]);
      this.all_items = [].concat(this.items);
    }).bind(this));
  }

  getStabilityClasss(definition: ApiDefinition): string {
    return definition.stability === "stable" ? "stability-stable" : "stability-experimental";
  }
  getIcon(definition: ApiDefinition): string {
    return definition.docType === "class" ? "logo-angular" : "flask";
  }

  onInput(e: any) {
    console.log(e);
    this.items = this.all_items.filter(i => i.title.toUpperCase().startsWith(this.searchTerm.toUpperCase()));
  }
  onCancel(e: any) {

  }
  selection(definition: ApiDefinition) {

    //mostrar nueva vewntana
    this.navCtrl.push(NgWeb, { definition: definition });

    ////mostrar pestaña
    // (<Tabs>this.navCtrl.parent).select(2);
    // (<Tabs>this.navCtrl.parent).getByIndex(2).rootParams = { definition: definition };
    // console.log((<Tab>this.navCtrl).rootParams)
  }
}
