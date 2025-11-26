import { Injectable } from '@angular/core';
import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessAndAccountResourcesService {

    getData() {
        return [
            { id: 1, label: 'Support Tools', activeItemId: 'support tools', name: 'support tools', description: 'mayo support tools description' ,
                rowCounts: 7,
                resources: [

                ]
            } ,

            { id: 2, label: 'Support Documents & Links', activeItemId: 'support documents', name: 'support documents', description: 'Description for supporting docs',
                rowCounts: 10,
                resources: [

                    {
                        label: 'Mayo Internal Links',
                        items: [
                            { label: 'Home Page', action: () => window.open('https://mayoweb.mayo.edu/') },
                        ]
                    },
                    {
                        label: 'Cloud Support Links',
                        items: [
                            { label: 'Enterprise Directory Services', action: () => window.open('https://mcsm.service-now.com/employeeconnect?id=sc_cat_item_guide&sys_id=b90f01ea470996104d0ce07a216d4354') },
                            { label: 'Cloud App Factory Request', action: () => window.open('https://mcsm.service-now.com/employeeconnect?id=sc_cat_item&sys_id=085eb106875b595466be40c6dabb3515') },
                            { label: 'Apigee Support Request', action: () => window.open('https://docs.mcc.mayo.edu/docs/mcc/apigee-x/contactusx') },
                        ]
                    },


                ]
            } ,
        ] as ResourceCategory[];
    }


    constructor(private http: HttpClient) { }

    getDataMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getDataSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getDataMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getDataLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getDataXLarge() {
        return Promise.resolve(this.getData());
    }
}
