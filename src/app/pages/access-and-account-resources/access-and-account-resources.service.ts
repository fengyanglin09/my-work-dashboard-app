import { Injectable } from '@angular/core';
import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessAndAccountResourcesService {

    getData() {
        return [
            { id: 1, label: 'Access & Support', activeItemId: 'Access & Support', name: 'Access & Support', description: 'mayo Access & Support description' ,
                rowCounts: 7,
                resources: [
                    {
                        label: 'Service Now',
                        items: [
                            { label: 'Enterprise Directory Services', action: () => window.open('https://mcsm.service-now.com/employeeconnect?id=sc_cat_item_guide&sys_id=b90f01ea470996104d0ce07a216d4354') },
                            { label: 'Cloud App Factory Request', action: () => window.open('https://mcsm.service-now.com/employeeconnect?id=sc_cat_item&sys_id=085eb106875b595466be40c6dabb3515') },
                            { label: 'Apigee Support Request', action: () => window.open('https://docs.mcc.mayo.edu/docs/mcc/apigee-x/contactusx') },
                        ]
                    },
                    {
                        label: 'App Access',
                        items: [
                            { label: 'Electronic Access Page', action: () => window.open('https://insideit.mayo.edu/electronic-access/') },
                            { label: 'SailPoint', action: () => window.open('https://electronicaccess.mayo.edu/identityiq/home.jsf') },
                            { label: 'App Onboarding With IDM', action: () => window.open('https://mcsm.service-now.com/kb_view.do?sysparm_article=KB0084207') },
                            { label: 'Multifactor Auth Tools', action: () => window.open('https://itconnect.mayo.edu/multifactor-authentication-tools') },
                            { label: 'Sectigo SSL Cert', action: () => window.open('https://cert-manager.com/customer/mayo/ssl/Idp/login') },
                            { label: 'Sectigo SSL Cert', type: 'link', icon:'fas fa-link',  url: 'https://www.google.com' },
                        ]
                    },
                    {
                        label: 'User Accounts',
                        items: [
                            { label: 'Master Data Management', action: () => window.open('https://masterdatamanagement.mayo.edu/') },
                            { label: 'Password Change', action: () => window.open('https://changepass.mayo.edu/Tools/UserPasswordChange') },
                            { label: 'Microsoft Authenticator doc1', action: () => window.open('https://mcsm.service-now.com/now/nav/ui/classic/params/target/kb_view.do%3Fsysparm_article%3DKB0101141') },
                            { label: 'Microsoft Authenticator doc2', action: () => window.open('https://mcsm.service-now.com/now/nav/ui/classic/params/target/kb_view.do%3Fsysparm_article%3DKB0108430') },
                        ]
                    },
                    {
                        label: 'Work Accounts',
                        items: [
                            { label: 'EPAM (vault)', action: () => window.open('https://epam.mayo.edu/') },
                            { label: 'S Account Pass Change', action: () => window.open('https://changepass.mayo.edu/Tools/WorkAccountPasswordChange') },
                            { label: 'Microsoft Authenticator doc2', action: () => window.open('https://idmp-prod-sam-ui.mayo.edu/') },
                            { label: 'Password Generator', action: () => window.open('https://us.norton.com/feature/password-generator') },
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
