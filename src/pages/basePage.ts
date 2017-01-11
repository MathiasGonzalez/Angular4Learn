import { BaseViewModel } from "../viewModels/baseViewModel";
import { ReflectiveInjector } from '@angular/core';


import { LocalClient } from "../services/localClient";

export class BasePage {
    // protected localClient: LocalClient;
    // protected injector: ReflectiveInjector;

    public ViewModel: BaseViewModel;

    constructor(mod?: BaseViewModel) {
        if (!this.isNull(mod)) {
            this.ViewModel = mod;
        }
        // this.injector = ReflectiveInjector.resolveAndCreate([LocalClient])
        // this.localClient = this.injector.get(LocalClient);
    }
    isNull(val: any): boolean {
        return val === null || val === undefined;
    }
}