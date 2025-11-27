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

                resources: [

                    {
                        label: 'App Access',
                        items: [
                            { label: 'Electronic Access Page', type: 'link', icon:'fas fa-link',  url:'https://insideit.mayo.edu/electronic-access/' },
                            { label: 'SailPoint', type: 'link', icon:'fas fa-link',  url:'https://electronicaccess.mayo.edu/identityiq/home.jsf' },
                            { label: 'App Onboarding With IDM', type: 'link', icon:'fas fa-link',  url:'https://mcsm.service-now.com/kb_view.do?sysparm_article=KB0084207' },
                            { label: 'Multifactor Auth Tools', type: 'link', icon:'fas fa-link',  url:'https://itconnect.mayo.edu/multifactor-authentication-tools' },
                            { label: 'Sectigo SSL Cert', type: 'link', icon:'fas fa-link',  url:'https://cert-manager.com/customer/mayo/ssl/Idp/login' },
                            { label: 'Access GCP Prod Env', type: 'doc', icon:'fas fa-file-alt',
                                htmlText: `
                                         <div>
                                              <p><b>JIT Access To GCP Prod Env:</b> </p>
                                              <ol style="list-style-type: decimal; padding-left: 1.5rem; margin-top: 0.5rem;">
                                                <li><code>Go to ServiceNow and create a new change record for RFC (need implement stage)</code>
                                                <a href="https://mcsm.service-now.com/" target="_blank" rel="noopener">
                                                    <i class="fa fa-external-link-alt"></i>
                                                </a>
                                                </li>
                                                <li><code>Go to SailPoint and complete JIT access with the RFC</code>
                                                <a href="https://electronicaccess.mayo.edu/identityiq/home.jsf" target="_blank" rel="noopener">
                                                    <i class="fa fa-external-link-alt"></i>
                                                </a>
                                                </li>
                                                <li><code>Go to security vault for S account credential</code>
                                                <a href="https://epam.mayo.edu/" target="_blank" rel="noopener">
                                                    <i class="fa fa-external-link-alt"></i>
                                                </a>
                                                </li>
                                                <li><code>Go to GCP cloud console and authenticate with S account</code>
                                                <a href="https://console.cloud.google.com" target="_blank" rel="noopener">
                                                    <i class="fa fa-external-link-alt"></i>
                                                </a>
                                                </li>
                                              </ol>
                                          </div>
                        ` },
                        ]
                    },
                    {
                        label: 'User Accounts',
                        items: [
                            { label: 'Master Data Management', type: 'link', icon:'fas fa-link',  url:'https://masterdatamanagement.mayo.edu/' },
                            { label: 'Password Change', type: 'link', icon:'fas fa-link',  url:'https://changepass.mayo.edu/Tools/UserPasswordChange' },
                            { label: 'Microsoft Authenticator doc1', type: 'link', icon:'fas fa-link',  url:'https://mcsm.service-now.com/now/nav/ui/classic/params/target/kb_view.do%3Fsysparm_article%3DKB0101141' },
                            { label: 'Microsoft Authenticator doc2', type: 'link', icon:'fas fa-link',  url:'https://mcsm.service-now.com/now/nav/ui/classic/params/target/kb_view.do%3Fsysparm_article%3DKB0108430' },
                        ]
                    },
                    {
                        label: 'Work Accounts',
                        items: [
                            { label: 'EPAM (vault)', type: 'link', icon:'fas fa-link',  url:'https://epam.mayo.edu/' },
                            { label: 'S Account Pass Change', type: 'link', icon:'fas fa-link',  url:'https://changepass.mayo.edu/Tools/WorkAccountPasswordChange' },
                            { label: 'Microsoft Authenticator doc2', type: 'link', icon:'fas fa-link',  url:'https://idmp-prod-sam-ui.mayo.edu/' },
                            { label: 'Password Generator', type: 'link', icon:'fas fa-link',  url:'https://us.norton.com/feature/password-generator' },
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
