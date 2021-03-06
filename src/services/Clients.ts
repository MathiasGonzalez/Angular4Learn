/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v8.5.6214.25340 (NJsonSchema v7.3.6214.20986) (http://NSwag.org)
// </auto-generated>
//----------------------

import 'rxjs/Rx'; 
import {Observable} from 'rxjs/Observable';
import {Injectable, Inject, Optional, OpaqueToken} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');
export class ApiDefinition {
    title: string;
    path: string;
    docType: string;
    stability: string;
    secure: string;
    barrel: string;
}
@Injectable()
export class LocalClient {
    private http: Http = null;
    constructor( @Inject(Http) http: Http) {
        this.http = http;
    }
    getLocalApiDefinition(): Observable<any> {
        return this.http.get("assets/initialdata.json").map(x => x.json());             
    }
}
@Injectable()
export class ConsoleClient {
    private http: Http = null; 
    private baseUrl: string = undefined; 
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http; 
        this.baseUrl = baseUrl ? baseUrl : "http://localhost/Angular4API"; 
    }

    /**
     * @return OK
     */
    generateScheme(): Observable<any> {
        let url_ = this.baseUrl + "/api/Console/GenerateScheme";

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGenerateScheme(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processGenerateScheme(response));
                } catch (e) {
                    return <Observable<any>><any>Observable.throw(e);
                }
            } else
                return <Observable<any>><any>Observable.throw(response);
        });
    }

    protected processGenerateScheme(response: Response): any {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: any = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            if (resultData200) {
                result200 = {};
                for (let key in resultData200) {
                    if (resultData200.hasOwnProperty(key))
                        result200[key] = resultData200[key] !== undefined ? resultData200[key] : {};
                }
            }
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    }
}

@Injectable()
export class VisualItemsClient {
    private http: Http = null; 
    private baseUrl: string = undefined; 
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http; 
        this.baseUrl = baseUrl ? baseUrl : "http://localhost/Angular4API"; 
    }

    /**
     * @return OK
     */
    first(input_searchDate: Date, input_cantidad: number, input_items: any[]): Observable<FirstVisualItems> {
        let url_ = this.baseUrl + "/api/VisualItems/First?";
        if (input_searchDate !== undefined)
        
            url_ += "input.searchDate=" + encodeURIComponent("" + input_searchDate.toJSON()) + "&"; 
        
        if (input_cantidad !== undefined)
        
            url_ += "input.cantidad=" + encodeURIComponent("" + input_cantidad) + "&"; 
        
        if (input_items !== undefined)
        
            input_items.forEach((item, index) => { 
                for (let attr in item)
                    url_ += 'input.items' + '[' + index + '].' + attr + '=' + encodeURIComponent("" + item[attr]) + "&";
            });

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processFirst(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processFirst(response));
                } catch (e) {
                    return <Observable<FirstVisualItems>><any>Observable.throw(e);
                }
            } else
                return <Observable<FirstVisualItems>><any>Observable.throw(response);
        });
    }

    protected processFirst(response: Response): FirstVisualItems {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: FirstVisualItems = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? FirstVisualItems.fromJS(resultData200) : new FirstVisualItems();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    /**
     * @return OK
     */
    sectionsByItem(input_visualItemGuid: string, input_sections: any[]): Observable<SectionsByItem> {
        let url_ = this.baseUrl + "/api/VisualItems/SectionsByItem?";
        if (input_visualItemGuid !== undefined)
        
            url_ += "input.visualItemGuid=" + encodeURIComponent("" + input_visualItemGuid) + "&"; 
        
        if (input_sections !== undefined)
        
            input_sections.forEach((item, index) => { 
                for (let attr in item)
                    url_ += 'input.sections' + "[" + index + "]." + attr + "=" + encodeURIComponent("" + item[attr]) + "&";
            });

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processSectionsByItem(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processSectionsByItem(response));
                } catch (e) {
                    return <Observable<SectionsByItem>><any>Observable.throw(e);
                }
            } else
                return <Observable<SectionsByItem>><any>Observable.throw(response);
        });
    }

    protected processSectionsByItem(response: Response): SectionsByItem {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: SectionsByItem = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? SectionsByItem.fromJS(resultData200) : new SectionsByItem();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    /**
     * @return OK
     */
    addVisualItems(input: AddVisualItems): Observable<AddVisualItems> {
        let url_ = this.baseUrl + "/api/VisualItems/AddVisualItems";

        const content_ = JSON.stringify(input ? input.toJS() : null);
        
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processAddVisualItems(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processAddVisualItems(response));
                } catch (e) {
                    return <Observable<AddVisualItems>><any>Observable.throw(e);
                }
            } else
                return <Observable<AddVisualItems>><any>Observable.throw(response);
        });
    }

    protected processAddVisualItems(response: Response): AddVisualItems {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: AddVisualItems = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? AddVisualItems.fromJS(resultData200) : new AddVisualItems();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    }
}

export class FirstVisualItems { 
    searchDate: Date; 
    cantidad: number; 
    items: VisualItem[];

    constructor(data?: any) {
        if (data !== undefined) {
            this.searchDate = data["searchDate"] ? new Date(data["searchDate"].toString()) : null;
            this.cantidad = data["cantidad"] !== undefined ? data["cantidad"] : null;
            if (data["Items"] && data["Items"].constructor === Array) {
                this.items = [];
                for (let item of data["Items"])
                    this.items.push(VisualItem.fromJS(item));
            }
        }
    }

    static fromJS(data: any): FirstVisualItems {
        return new FirstVisualItems(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["searchDate"] = this.searchDate ? this.searchDate.toISOString() : null;
        data["cantidad"] = this.cantidad !== undefined ? this.cantidad : null;
        if (this.items && this.items.constructor === Array) {
            data["Items"] = [];
            for (let item of this.items)
                data["Items"].push(item.toJS());
        }
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new FirstVisualItems(JSON.parse(json));
    }
}

export class VisualItem { 
    visualItemGuid: string; 
    description: string; 
    creationDate: Date; 
    visualItemTypeId: string; 
    title: string; 
    html: string; 
    url: string; 
    image: string; 
    icon: string; 
    sections: VisualSection[]; 
    visualItemType: VisualItemType; 
    readonly itemInfo: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.visualItemGuid = data["VisualItemGuid"] !== undefined ? data["VisualItemGuid"] : null;
            this.description = data["Description"] !== undefined ? data["Description"] : null;
            this.creationDate = data["CreationDate"] ? new Date(data["CreationDate"].toString()) : null;
            this.visualItemTypeId = data["VisualItemTypeId"] !== undefined ? data["VisualItemTypeId"] : null;
            this.title = data["Title"] !== undefined ? data["Title"] : null;
            this.html = data["Html"] !== undefined ? data["Html"] : null;
            this.url = data["Url"] !== undefined ? data["Url"] : null;
            this.image = data["Image"] !== undefined ? data["Image"] : null;
            this.icon = data["Icon"] !== undefined ? data["Icon"] : null;
            if (data["Sections"] && data["Sections"].constructor === Array) {
                this.sections = [];
                for (let item of data["Sections"])
                    this.sections.push(VisualSection.fromJS(item));
            }
            this.visualItemType = data["VisualItemType"] ? VisualItemType.fromJS(data["VisualItemType"]) : null;
            this.itemInfo = data["ItemInfo"] !== undefined ? data["ItemInfo"] : null;
        }
    }

    static fromJS(data: any): VisualItem {
        return new VisualItem(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["VisualItemGuid"] = this.visualItemGuid !== undefined ? this.visualItemGuid : null;
        data["Description"] = this.description !== undefined ? this.description : null;
        data["CreationDate"] = this.creationDate ? this.creationDate.toISOString() : null;
        data["VisualItemTypeId"] = this.visualItemTypeId !== undefined ? this.visualItemTypeId : null;
        data["Title"] = this.title !== undefined ? this.title : null;
        data["Html"] = this.html !== undefined ? this.html : null;
        data["Url"] = this.url !== undefined ? this.url : null;
        data["Image"] = this.image !== undefined ? this.image : null;
        data["Icon"] = this.icon !== undefined ? this.icon : null;
        if (this.sections && this.sections.constructor === Array) {
            data["Sections"] = [];
            for (let item of this.sections)
                data["Sections"].push(item.toJS());
        }
        data["VisualItemType"] = this.visualItemType ? this.visualItemType.toJS() : null;
        data["ItemInfo"] = this.itemInfo !== undefined ? this.itemInfo : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new VisualItem(JSON.parse(json));
    }
}

export class VisualSection { 
    section_key: number; 
    title: string; 
    content: string; 
    visualItemGuid: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.section_key = data["section_key"] !== undefined ? data["section_key"] : null;
            this.title = data["title"] !== undefined ? data["title"] : null;
            this.content = data["content"] !== undefined ? data["content"] : null;
            this.visualItemGuid = data["VisualItemGuid"] !== undefined ? data["VisualItemGuid"] : null;
        }
    }

    static fromJS(data: any): VisualSection {
        return new VisualSection(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["section_key"] = this.section_key !== undefined ? this.section_key : null;
        data["title"] = this.title !== undefined ? this.title : null;
        data["content"] = this.content !== undefined ? this.content : null;
        data["VisualItemGuid"] = this.visualItemGuid !== undefined ? this.visualItemGuid : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new VisualSection(JSON.parse(json));
    }
}

export class VisualItemType { 
    visualItemTypeId: string; 
    visualItemTypeDescription: string;

    constructor(data?: any) {
        if (data !== undefined) {
            this.visualItemTypeId = data["VisualItemTypeId"] !== undefined ? data["VisualItemTypeId"] : null;
            this.visualItemTypeDescription = data["VisualItemTypeDescription"] !== undefined ? data["VisualItemTypeDescription"] : null;
        }
    }

    static fromJS(data: any): VisualItemType {
        return new VisualItemType(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["VisualItemTypeId"] = this.visualItemTypeId !== undefined ? this.visualItemTypeId : null;
        data["VisualItemTypeDescription"] = this.visualItemTypeDescription !== undefined ? this.visualItemTypeDescription : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new VisualItemType(JSON.parse(json));
    }
}

export class SectionsByItem { 
    visualItemGuid: string; 
    sections: VisualSection[];

    constructor(data?: any) {
        if (data !== undefined) {
            this.visualItemGuid = data["VisualItemGuid"] !== undefined ? data["VisualItemGuid"] : null;
            if (data["Sections"] && data["Sections"].constructor === Array) {
                this.sections = [];
                for (let item of data["Sections"])
                    this.sections.push(VisualSection.fromJS(item));
            }
        }
    }

    static fromJS(data: any): SectionsByItem {
        return new SectionsByItem(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["VisualItemGuid"] = this.visualItemGuid !== undefined ? this.visualItemGuid : null;
        if (this.sections && this.sections.constructor === Array) {
            data["Sections"] = [];
            for (let item of this.sections)
                data["Sections"].push(item.toJS());
        }
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new SectionsByItem(JSON.parse(json));
    }
}

export class AddVisualItems { 
    ok: boolean; 
    newitems: VisualItem[];

    constructor(data?: any) {
        if (data !== undefined) {
            this.ok = data["ok"] !== undefined ? data["ok"] : null;
            if (data["newitems"] && data["newitems"].constructor === Array) {
                this.newitems = [];
                for (let item of data["newitems"])
                    this.newitems.push(VisualItem.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AddVisualItems {
        return new AddVisualItems(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["ok"] = this.ok !== undefined ? this.ok : null;
        if (this.newitems && this.newitems.constructor === Array) {
            data["newitems"] = [];
            for (let item of this.newitems)
                data["newitems"].push(item.toJS());
        }
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new AddVisualItems(JSON.parse(json));
    }
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result?: any; 

    constructor(message: string, status: number, response: string, result?: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}