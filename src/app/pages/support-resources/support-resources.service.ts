import { Injectable } from '@angular/core';
import { ResourceCategory } from '../../core/model/cheatsheet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupportResourcesService {

    getData() {
        return [
            {
                id: 1,
                label: 'Support Tools',
                activeItemId: 'support tools',
                name: 'support tools',
                description: 'mayo support tools description',

                resources: []
            },

            {
                id: 2,
                label: 'Support Documents & Links',
                activeItemId: 'support documents',
                name: 'support documents',
                description: 'Description for supporting docs',

                resources: [
                    {
                        label: 'Mayo Internal Links',
                        items: [
                            { label: 'Mayo Home Page', type: 'link', icon: 'fas fa-link', url: 'https://mayoweb.mayo.edu/' },
                            { label: 'IT Admin Page', type: 'link', icon: 'fas fa-link', url: 'https://mctools.sharepoint.com/teams/IT-Admin-Assist/SitePages/Home.aspx' },
                            {
                                label: 'Peripherals Purchase',
                                type: 'doc',
                                icon: 'fas fa-file-alt',
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
                        `
                            },
                            { label: 'Service Now', type: 'link', icon: 'fas fa-link', url: 'https://mcsm.service-now.com/' }
                        ]
                    },
                    {
                        label: 'Cloud Support Links',
                        items: [
                            { label: 'Enterprise Directory Services', type: 'link', icon: 'fas fa-link', url: 'https://mcsm.service-now.com/employeeconnect?id=sc_cat_item_guide&sys_id=b90f01ea470996104d0ce07a216d4354' },
                            { label: 'Cloud App Factory Request', type: 'link', icon: 'fas fa-link', url: 'https://mcsm.service-now.com/employeeconnect?id=sc_cat_item&sys_id=085eb106875b595466be40c6dabb3515' },
                            { label: 'Apigee Support Request', type: 'link', icon: 'fas fa-link', url: 'https://docs.mcc.mayo.edu/docs/mcc/apigee-x/contactusx' }
                        ]
                    },
                    {
                        label: 'On-Prem Support Links',
                        items: [
                            { label: 'Application Hosting Web service', type: 'link', icon: 'fas fa-link', url: 'http://webrequests/' },
                            { label: 'Application Hosting Web Incident', type: 'link', icon: 'fas fa-link', url: 'http://webincidents/' },
                            { label: 'Application Context Managaement', type: 'link', icon: 'fas fa-link', url: 'https://mcsm.service-now.com/kb_knowledge.do?sys_id=a9d524cac31f2650a5b69fee0501317a&sysparm_record_target=kb_knowledge&sysparm_record_row=5&sysparm_record_rows=51&sysparm_record_list=sys_tags.e77b51c01b10b014ef5deb11604bcb8b%3De77b51c01b10b014ef5deb11604bcb8b%5EORsys_tags.f18b55c01b10b014ef5deb11604bcb63%3Df18b55c01b10b014ef5deb11604bcb63%5EORsys_tags.1ab76e818372b9506ae9f130feaad368%3D1ab76e818372b9506ae9f130feaad368%5Eu_coordinator_group%3D858e707edb1b7a8435c57e09af961921%5EORu_coordinator_group%3D9e9c62731b17fc10f283c806604bcbd3%5Eworkflow_state%3Dpublished%5Eu_availability%21%3Don_mobile%5EORu_availability%3D%5EORDERBYshort_description' },
                            {
                                label: 'Application Hosting Web On Boarding Info',
                                type: 'doc',
                                icon: 'fas fa-file-alt',
                                htmlText: `
                                            <section>
                                              <h2>Deployment / Runtime Notes</h2>

                                              <h3>Environment Variables</h3>
                                              <p>
                                                In your build directory (where UCD builds the new container image), we have a
                                                <code>setenv.sh</code> that configures Catalina. We create a variable called
                                                <code>TOMCATENV</code> that is set for <strong>DEV</strong>, <strong>INT</strong>,
                                                and <strong>PROD</strong>.
                                              </p>

                                              <h3>Context File</h3>
                                              <p>
                                                You should be able to configure your context file to be deployed in your ADO project,
                                                and UCD will copy it down into your build directory. We can also do it manually through
                                                a ticket, but this is not as convenient as using ADO to deploy it.
                                              </p>

                                              <h3>Variable Changes</h3>
                                              <p>
                                                For the environments that we have set, that is what is put into the running container.
                                                Changes would most likely not be allowed, but discussions can be had if needed.
                                              </p>

                                              <h3>Log Management</h3>
                                              <p>
                                                Logs are found in the shared folder:
                                                <code>\\\\mfad\\rchweb\\reap\\Tomcat\\dlm\\dlm_rtuse</code>.
                                                As you push to <strong>INT</strong> and <strong>PROD</strong>, you will see
                                                <code>int</code> and <code>prod</code> folders.
                                              </p>
                                              <p>
                                                We have a <strong>JournalD → Filebeat → Logstash</strong> pipeline configured to read all
                                                systemout from your container and dump it to that folder.
                                              </p>

                                              <h3>Cleanup</h3>
                                              <p>
                                                Cleanup of the logs in the share is up to you. I would not recommend deleting logs, as
                                                they can always be referenced for troubleshooting.
                                              </p>
                                              <p>
                                                One note: when you enable debug logs, it can potentially fill up the host's logging folder.
                                                We recommend enabling and then disabling debug log levels to prevent resource exhaustion for
                                                your running container.
                                              </p>
                                            </section>

                        `
                            }
                        ]
                    }
                ]
            }
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
