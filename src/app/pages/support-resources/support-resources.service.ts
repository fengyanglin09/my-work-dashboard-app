import { Injectable } from '@angular/core';
import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupportResourcesService {

    getData() {
        return [
            { id: 1, label: 'Support Tools', activeItemId: 'support tools', name: 'support tools', description: 'mayo support tools description' ,

                resources: [


                ]
            } ,

            { id: 2, label: 'Support Documents & Links', activeItemId: 'support documents', name: 'support documents', description: 'Description for supporting docs',

                resources: [

                    {
                        label: 'Mayo Internal Links',
                        items: [
                            { label: 'Mayo Home Page', type: 'link', icon:'fas fa-link',  url:'https://mayoweb.mayo.edu/' },
                            { label: 'IT Admin Page', type: 'link', icon:'fas fa-link',  url:'https://mctools.sharepoint.com/teams/IT-Admin-Assist/SitePages/Home.aspx' },
                            { label: 'Peripherals Purchase', type: 'doc', icon:'fas fa-file-alt',
                                htmlText: `
                                         <div>
                                              <p><b>How to order a purchase:</b> </p>
                                              <ol style="list-style-type: decimal; padding-left: 1.5rem; margin-top: 0.5rem;">
                                                <li><code>Go to IT Admin page</code>
                                                <a href="https://mctools.sharepoint.com/teams/IT-Admin-Assist/SitePages/Home.aspx" target="_blank" rel="noopener">
                                                    <i class="fa fa-external-link-alt"></i>
                                                </a>
                                                </li>
                                                <li><code>ask an Admin through the Admin request page to purchase one.  Would be 100 80167 Cost Center, Tracking ID: STAFFMGT when they ask</code>

                                                </li>
                                               </ol>
                                          </div>
                        ` },
                            { label: 'Service Now', type: 'link', icon:'fas fa-link',  url:'https://mcsm.service-now.com/' },
                        ]
                    },
                    {
                        label: 'Cloud Support Links',
                        items: [
                            { label: 'Enterprise Directory Services', type: 'link', icon:'fas fa-link',  url:'https://mcsm.service-now.com/employeeconnect?id=sc_cat_item_guide&sys_id=b90f01ea470996104d0ce07a216d4354' },
                            { label: 'Cloud App Factory Request', type: 'link', icon:'fas fa-link',  url:'https://mcsm.service-now.com/employeeconnect?id=sc_cat_item&sys_id=085eb106875b595466be40c6dabb3515' },
                            { label: 'Apigee Support Request', type: 'link', icon:'fas fa-link',  url:'https://docs.mcc.mayo.edu/docs/mcc/apigee-x/contactusx' },
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
