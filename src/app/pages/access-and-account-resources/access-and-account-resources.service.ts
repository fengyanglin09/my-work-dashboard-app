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
                        label: 'Service Now',
                        items: [
                            { label: 'Enterprise Directory Services', type: 'link', icon:'fas fa-link',  url:'https://mcsm.service-now.com/employeeconnect?id=sc_cat_item_guide&sys_id=b90f01ea470996104d0ce07a216d4354' },
                            { label: 'Cloud App Factory Request', type: 'link', icon:'fas fa-link',  url:'https://mcsm.service-now.com/employeeconnect?id=sc_cat_item&sys_id=085eb106875b595466be40c6dabb3515' },
                            { label: 'Apigee Support Request', type: 'link', icon:'fas fa-link',  url:'https://docs.mcc.mayo.edu/docs/mcc/apigee-x/contactusx' },
                        ]
                    },
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
                                              <p><b>Dependency App:</b> <span style="color:#2c7be5;">CliApi</span></p>
                                              <ol style="list-style-type: decimal; padding-left: 1.5rem; margin-top: 0.5rem;">
                                                <li><code>/v1/Result/bioChem</code></li>
                                                <li><code>/v1/Sslv/SampleInfo</code></li>
                                                <li><code>/v1/Sslv/Result</code></li>
                                                <li><code>/v1/SoftMic/Patient/getDemographics</code></li>
                                                <li><code>/v1/Case/SoftId/Search</code></li>
                                              </ol>
                                          </div>
                                          <div style="margin-top:5rem;">
                                              <p><b>Dependency Auth Server:</b> <span style="color:#2c7be5;">Azure Entra ID</span></p>
                                              <ol style="margin-left: 1rem; list-style-type: decimal;">
                                                <li><code>Azure Tenant Id - a25fff9c-3f63-4fb2-9a8a-d9bdd0321f9a</code></li>
                                                <li><code>App Roles - ADMINISTRATOR, TECH, NURSE</code></li>
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
