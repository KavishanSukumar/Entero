import React from 'react';
import { Alignments, HtmlEditor, Image, Inject, Link, QuickToolbar,
RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';
import { Header } from '../components';
import {Button} from '../components';

const BusinessPolicies = () => {
    return (
        <div className="w-full p-2 pb-48
        bg-slate-100">
            <div className="m-2 md:m-10 mt-24 p-2
          md:p-10 bg-white rounded-3xl">
          <Header title="Business Policies" />
          <p className="text-sm italic truncate overflow-hidden">
          <h2 className="content-center text-center">Privacy Policy Entero</h2><br />
          <p>Protecting your private information is our priority. This Statement of Privacy applies to
www.topbrand.co, Top Brand Worldwide, LLC and Top Brand S.A.S and governs data
collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all
references to Top Brand Worldwide, LLC include www.topbrand.co, Top Brand S.A.S, Top
Brand, Isla Avatara , Avatara Island, Top Brand, www.IslaAvatara.com and
www.AvataraIsland.com. The Top Brand website is a Information and registration site. By
using the Top Brand website, you consent to the data practices described in this
statement.</p><br />
<b><h4>Collection of your Personal Information</h4></b>
<p>In order to better provide you with products and services offered, Top Brand may collect
personally identifiable information, such as your:</p>
- First and Last Name
- Mailing Address
- E-mail Address
- Phone Number
- Job Title
<p>Top Brand may also collect anonymous demographic information, which is not unique to
you, such as your:</p>
- Age
- Gender
- Household Income
<p>We do not collect any personal information about you unless you voluntarily provide it to
us. However, you may be required to provide certain personal information to us when you
elect to use certain products or services. These may include: (a) registering for an account;
(b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing
up for special offers from selected third parties; (d) sending us an email message; (e)
submitting your credit card or other payment information when ordering and purchasing
products and services. To wit, we will use your information for, but not limited to,
communicating with you in relation to services and/or products you have requested from
us. We also may gather additional personal or non-personal information in the future.</p>
<h6>Use of your Personal Information</h6>
<p>Top Brand collects and uses your personal information to operate and deliver the services
you have requested.</p>
<p>Top Brand may also use your personally identifiable information to inform you of other
products or services available from Top Brand and its affiliates.</p><br />
<h4><b>Sharing Information with Third Parties</b></h4>
Top Brand does not sell, rent or lease its customer lists to third parties.
<p>Top Brand may share data with trusted partners to help perform statistical analysis, send
you email or postal mail, provide customer support, or arrange for deliveries. All such
third parties are prohibited from using your personal information except to provide these
services to Top Brand, and they are required to maintain the confidentiality of your
information.</p>
<p>Top Brand may disclose your personal information, without notice, if required to do so by
law or in the good faith belief that such action is necessary to: (a) conform to the edicts of
the law or comply with legal process served on Top Brand or the site; (b) protect and
defend the rights or property of Top Brand; and/or (c) act under exigent circumstances to
protect the personal safety of users of Top Brand, or the public.</p><br />
<h4><b>Automatically Collected Information</b></h4>
<p>Information about your computer hardware and software may be automatically collected
by Top Brand. This information can include: your IP address, browser type, domain names,
access times and referring website addresses. This information is used for the operation of
the service, to maintain quality of the service, and to provide general statistics regarding
use of the Top Brand website.</p><br />
<h4><b>Use of Cookies</b></h4>
<p>The Top Brand website may use "cookies" to help you personalize your online experience.
A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot
be used to run programs or deliver viruses to your computer. Cookies are uniquely
assigned to you, and can only be read by a web server in the domain that issued the
cookie to you.</p>
<p>One of the primary purposes of cookies is to provide a convenience feature to save you
time. The purpose of a cookie is to tell the Web server that you have returned to a specific
page. For example, if you personalize Top Brand pages, or register with Top Brand site or
services, a cookie helps Top Brand to recall your specific information on subsequent visits.
This simplifies the process of recording your personal information, such as billing
addresses, shipping addresses, and so on. When you return to the same Top Brand
website, the information you previously provided can be retrieved, so you can easily use
the Top Brand features that you customized.</p>
<p>You have the ability to accept or decline cookies. Most Web browsers automatically
accept cookies, but you can usually modify your browser setting to decline cookies if you
prefer. If you choose to decline cookies, you may not be able to fully experience the
interactive features of the Top Brand services or websites you visit.</p><br />
<b>Links</b>
<p>This website contains links to other sites. Please be aware that we are not responsible for
the content or privacy practices of such other sites. We encourage our users to be aware
when they leave our site and to read the privacy statements of any other site that collects
personally identifiable information.</p>
Security of your Personal Information
<p>Top Brand secures your personal information from unauthorized access, use, or
disclosure. Top Brand uses the following methods for this purpose:</p>
- SSL Protocol
When personal information (such as a credit card number) is transmitted to other
websites, it is protected through the use of encryption, such as the Secure Sockets Layer
(SSL) protocol.
<p>We strive to take appropriate security measures to protect against unauthorized access to
or alteration of your personal information. Unfortunately, no data transmission over the
Internet or any wireless network can be guaranteed to be 100% secure. As a result, while
we strive to protect your personal information, you acknowledge that: (a) there are
security and privacy limitations inherent to the Internet which are beyond our control; and
(b) security, integrity, and privacy of any and all information and data exchanged between
you and us through this Site cannot be guaranteed.</p>
Right to Deletion
<p>Subject to certain exceptions set out below, on receipt of a verifiable request from you,
we will:</p>
• Delete your personal information from our records; and
• Direct any service providers to delete your personal information from their
records.
<p>Please note that we may not be able to comply with requests to delete your personal
information if it is necessary to:</p>
• Complete the transaction for which the personal information was collected, fulfill
the terms of a written warranty or product recall conducted in accordance with federal
law, provide a good or service requested by you, or reasonably anticipated within the
context of our ongoing business relationship with you, or otherwise perform a contract
between you and us;
• Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal
activity; or prosecute those responsible for that activity;
• Debug to identify and repair errors that impair existing intended functionality;
• Exercise free speech, ensure the right of another consumer to exercise his or her
right of free speech, or exercise another right provided for by law;
• Comply with the California Electronic Communications Privacy Act;
• Engage in public or peer-reviewed scientific, historical, or statistical research in the
public interest that adheres to all other applicable ethics and privacy laws, when our
deletion of the information is likely to render impossible or seriously impair the
achievement of such research, provided we have obtained your informed consent;
• Enable solely internal uses that are reasonably aligned with your expectations
based on your relationship with us;
• Comply with an existing legal obligation; or
• Otherwise use your personal information, internally, in a lawful manner that is
compatible with the context in which you provided the information.<br />
Children Under Thirteen
<p>Top Brand does not knowingly collect personally identifiable information from children
under the age of thirteen. If you are under the age of thirteen, you must ask your parent
or guardian for permission to use this website.
Disconnecting your Top Brand Account from Third Party Websites
You will be able to connect your Top Brand account to third party accounts. BY
CONNECTING YOUR TOP BRAND ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU
ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE
OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY
SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT
YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED IN THIS
MANNER, DO NOT USE THIS FEATURE. You may disconnect your account from a third
party account at any time. Users may learn how to disconnect their accounts from third-
party websites by contacting us via email or telephone.</p>
<b><h4>E-mail Communications</h4></b>
<p>From time to time, Top Brand may contact you via email for the purpose of providing
announcements, promotional offers, alerts, confirmations, surveys, and/or other general
communication. In order to improve our Services, we may receive a notification when you
open an email from Top Brand or click on a link therein.</p>
<p>If you would like to stop receiving marketing or promotional communications via email
from Top Brand, you may opt out of such communications by Unsubcribe Link on Email or
by Emailing to legal@topbrand.co.</p>
External Data Storage Sites
<p>We may store your data on servers provided by third party hosting vendors with whom
we have contracted.</p><br />
<b><h4>Changes to this Statement</h4></b>
<p>Top Brand reserves the right to change this Privacy Policy from time to time. We will notify
you about significant changes in the way we treat personal information by sending a
notice to the primary email address specified in your account, by placing a prominent
notice on our website, and/or by updating any privacy information. Your continued use of
the website and/or Services available after such modifications will constitute your: (a)
acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound
by that Policy.</p><br />
<b><h4>Contact Information</h4></b>
<p>Top Brand welcomes your questions or comments regarding this Statement of Privacy. If
you believe that Top Brand has not adhered to this Statement, please contact Top Brand
at:</p><br />
<p className="content-center text-center">
Top Brand Worldwide, LLC<br />
139 Fulton Street PH 1101<br />
New York, New York 10038<br />
Email Address:<br />
newyork@topbrand.co<br />
Telephone number:<br />
9175088953<br />
Effective as of January 01, </p>
              </p>
          {/* <RichTextEditorComponent>
            <Inject services={[HtmlEditor, Toolbar,
            Image, Link, QuickToolbar ]} />
          </RichTextEditorComponent> */}

          {/* <div className="mt-6">
              <Button 
                color="white"
                bgColor="#03C9D7"
              //  bgColor={currentColor}
                text="Edit"
                borderRadius="10px"
                size="md"
                width="200px"
              />
            </div> */}
        </div>

        {/* ---only admin can this div-(start)--- */}
        <div className="m-2 md:m-10 mt-24 p-2
          md:p-10 bg-white rounded-3xl">
          <Header title="Edit Business Policies" />
          <RichTextEditorComponent>
            <Inject services={[HtmlEditor, Toolbar,
            Image, Link, QuickToolbar ]} />
          </RichTextEditorComponent>

          <div className="mt-6">
              <Button 
                color="white"
                bgColor="#03C9D7"
              //  bgColor={currentColor}
                text="Edit"
                borderRadius="10px"
                size="md"
                width="200px"
              />
            </div>
        </div>

        {/* ---only admin can this div-(end)--- */}

        </div>
      )
}

export default BusinessPolicies