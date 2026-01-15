import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import zenobidLogo from "@/assets/zenobid-logo.png";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={zenobidLogo} alt="Zenobid" className="h-8 w-auto" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground">
            Quantumproc Systems Private Limited is a private limited company, duly incorporated under the applicable Indian laws, having its registered office at DCG04, 2114-17, DLF Corporate Greens, Sector 74A, Gurugram, Haryana, 122004 (hereinafter referred to as "We"/ "Us"/"Company/"Our" which expression shall mean and include its affiliates, successors and permitted assigns). The Company is engaged in the business of providing a software platform for B2B tenders (goods, works, and services), with the goal of making procurement processes transparent and fair ("Services").
          </p>

          <p className="text-muted-foreground">
            The Company operates through website https://zenobid.com/ ("Website") (hereinafter referred to as "Platform"). The Platform is an AI driven platform, made available to both, the supplier who shall participate in the tenders to be listed on the Platform ("Supplier") and the bidder who shall list the tenders on the Platform ("Bidder"). The Supplier and the Bidder shall hereinafter collectively be referred to as "User" / "You" / "Your". The use of the Platform is governed by the following terms and conditions ("Terms") as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. You acknowledge and agree that You shall be subject to the policies that are applicable to the Platform and by mere use of the Platform, You shall be contracting with the Company and these Terms, including the policies, constitute Your binding obligations with the Company.
          </p>

          <p className="text-muted-foreground">
            These are standard terms and conditions in form of electronic record in terms of Information Technology Act, 2000 and rules thereunder as applicable and provisions to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record does not require any physical or digital signatures. By mere use of the Platform, You agree to be subject to the applicable rules, guidelines, policies, terms, and conditions and the same shall be deemed to be incorporated into this Terms and be considered as part and parcel of this Terms. We reserve the right, at Our sole discretion, to change, modify, add, or remove portions of these Terms, at any time without any prior written notice to You. It is Your responsibility to review these Terms periodically for updates / changes, unless stated otherwise in these Terms. Your continued use of the Platform following the posting of changes will mean that You accept and agree to the revisions. You acknowledge and agree that this is a legally binding agreement and is enforceable against You. As long as You comply with these Terms, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Platform. If You do not agree to these Terms, please do not access or use the Services provided through the Platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8">1. Personal Data</h2>

          <h3 className="text-xl font-medium mt-6">1.1.</h3>
          <p className="text-muted-foreground">
            The Platform allows You to submit and access certain personal data (including but not limited to name, email address, contact number, gender, employee data, tender related data content or material provided by You) (collectively, "User Data").
          </p>

          <h3 className="text-xl font-medium mt-6">1.2.</h3>
          <p className="text-muted-foreground">
            By submitting User Data to Us, You hereby grant, and represent and warrant that You have all rights necessary to grant, all rights and licenses to the User Data required by Us to provide the Services, including without limitation, features of the Services that enable You to share certain User Data with third parties through Our Service. You agree that We shall have the right to use, store, transmit, distribute, modify, copy, display, sublicense, and create derivative works of User Data. You hereby agree that the User Data may be transferred to, and maintained on, servers located outside India, but only to jurisdictions permitted by the Government of India under Applicable Laws. By signing up with Us, You consent to receive updates related to Your account and program (such as, sign up confirmation, updated terms of service, account expiry, tender details, etc.) on email, SMS and WhatsApp.
          </p>

          <h3 className="text-xl font-medium mt-6">1.3. Information Collection</h3>
          <p className="text-muted-foreground">
            Information about Your hardware and software may be automatically collected by Us. This information can include usage information that includes Your interactions with Platform, device information, such as unique device identifiers, operating system information, internet service provider, IP address, screen resolution, language, the date and time of each of Your logins and requests. This information is used for the operation of Platform, to maintain quality of the Services, and to provide general statistics regarding use of the Services and/or the Platform.
          </p>

          <h3 className="text-xl font-medium mt-6">1.4. Security Practices</h3>
          <p className="text-muted-foreground">
            The Company implements reasonable security practices and procedures including encryption, access controls, and regular security audits to protect Your personal data. In the event that User Data is disclosed to or accessed by an unauthorized party and has come to Our knowledge, We shall promptly notify You and use reasonable efforts to cooperate with Your investigation of the incident. The Company shall not be responsible for any backup, recovery or other steps required to ensure that User Data is recoverable in the case of data loss. You are solely responsible for backing up Your User Data on a regular basis and taking appropriate steps to safeguard and ensure the integrity of Your User Data.
          </p>

          <h3 className="text-xl font-medium mt-6">1.5. Ownership of User Data</h3>
          <p className="text-muted-foreground">
            You own all right, title, and interest (including all intellectual property rights) in and to Your User Data. Following Your use of the Platform, You may submit a written request to the Company to remove from the Company's systems any User Data consisting of personally identifiable information and following the receipt of such request, Company shall promptly delete any such personally identifiable information from its systems. Company shall provide to You a copy of Your User Data promptly following Your written request for such User Data.
          </p>

          <h3 className="text-xl font-medium mt-6">1.6. Personal Information Collection</h3>
          <p className="text-muted-foreground">
            As part of the Services, We may collect certain personal information (including but not limited to phone number and email address), and let You interact with other users of the Platform via social media or other third party service platforms. Details of the types of information We collect and the end use for such information is provided in Our privacy policy which can be accessed at https://zenobid.com/privacy. You acknowledge that We do not control what users do with the information they obtain from 'WhatsApp' or other social media or other third party service platform. You acknowledge that We are not responsible or liable for interactions involved between users/third parties. We are not liable for disputes, claims, losses, injuries or damage of any kind that arise out of or relate to the conduct of users of the Platform and/or any third party.
          </p>

          <h2 className="text-2xl font-semibold mt-8">2. Payment Terms</h2>
          <p className="text-muted-foreground">
            In the event you have a paid account, fees are non-refundable except as required by law or in our sole discretion. If we terminate your Account without cause, we may refund you the fees for the unused portion of your subscription. If you sign up for our annual or monthly prepaid plans, and cancel those plans later, you are not entitled to a refund for the unused portion of your subscription period. You agree to pay all applicable fees when due and, if such fees are being paid via credit card or other electronic means, you authorize us to charge such fees using your selected payment method. By default, customer accounts are set to auto-renew and we may automatically charge you for such renewal on or after the renewal date associated with your account unless you have cancelled the Service prior to its renewal date. We may revise fee rates for the Service from time to time and inform you before charging the revised amount. You are responsible for providing complete and accurate billing information to Zenobid (Quantumproc Systems Private Limited). We may suspend or terminate your use of the Service if fees become past due. You are responsible for all taxes (excluding taxes on our net income), and we will charge tax if required to do so by law.
          </p>

          <h2 className="text-2xl font-semibold mt-8">3. User Representations and Warranties</h2>

          <h3 className="text-xl font-medium mt-6">3.1. You hereby represent and warrant:</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>That You have the right, authority, and capacity to enter into this Terms on Your own behalf and on behalf on any person for whom You are acting and to abide by all of the terms and conditions contained herein, and that if any aspect of Your participation violates provisions of the law to which You are subject, You will cease using the Services and close Your User Account;</li>
            <li>That You are at least 18 (eighteen) years old and competent to execute and perform into any agreement You enter into through Our Platform;</li>
            <li>That You shall not use a false name or email address owned or controlled by another person with the intent to impersonate that person or for any other reason.</li>
            <li>That You shall not use a user ID name that is subject to any rights of a person other than yourself without appropriate authorization.</li>
            <li>That You shall comply with the terms and conditions stipulated in this Terms;</li>
            <li>That You shall be solely responsible for maintaining the confidentiality of Your password;</li>
            <li>That all the representations made by You to Us including in accordance with these Terms are true, correct and complete and that You will update Your registration information with the Company as needed so that it remains true, correct and complete;</li>
            <li>That Your usage of the Services will not, in any manner, directly or indirectly, violate terms of any contractual arrangement binding on You;</li>
            <li>You are capable of assessing surroundings and identifying risks involved with each exercise in the Services and are responsible and shall solely be liable for the consequences of any injury to Your child and Yourself.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">4. Prohibited Use</h2>
          <p className="text-muted-foreground">
            The Platform may be used only for lawful purposes. The Company specifically prohibits any use of the Platform for, and You agree not to use the Platform for any of the following purposes:
          </p>
          <p className="text-muted-foreground mt-4">
            Use, display, upload, modify, publish, transmit, update, share or store any information that:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>belongs to another person;</li>
            <li>is harmful, threatening, abusive, harassing, blasphemous, objectionable, defamatory, vulgar, obscene, pornographic, paedophilic, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;</li>
            <li>harm minors in any way;</li>
            <li>infringes any patent, trademark, copyright or other proprietary rights;</li>
            <li>violates any law for the time being in force;</li>
            <li>discloses sensitive personal information of other person or to which the User does not have any right to;</li>
            <li>causes annoyance or inconvenience or deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
            <li>impersonate another person;</li>
            <li>contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;</li>
            <li>threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            We reserve the right to suspend or terminate accounts engaged in prohibited conduct.
          </p>

          <h2 className="text-2xl font-semibold mt-8">5. Termination</h2>
          <h3 className="text-xl font-medium mt-6">5.1.</h3>
          <p className="text-muted-foreground">
            In the event it is determined by Us that You have violated any of these Terms, We shall have the right, at Our sole discretion, to suspend Your subscription and/or prohibit access to any or all features/parts of the Services forthwith. Any such suspension or termination of access to Services may be effected by Us without providing You with a prior written notice in this regard. Upon such termination of access to the Services, these Terms, as applicable to You, will be deemed to have been terminated and no refund of any payments made by You shall be required to be made by the Company.
          </p>

          <h3 className="text-xl font-medium mt-6">5.2.</h3>
          <p className="text-muted-foreground">
            We have the right to, at Our sole discretion, to suspend, limit, or terminate Your access to the informational mailing at any time without explanation or prior notice to You.
          </p>

          <h3 className="text-xl font-medium mt-6">5.3.</h3>
          <p className="text-muted-foreground">
            These Terms shall stand terminated upon Your closing of Your User Account on the Platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8">6. Indemnity</h2>
          <h3 className="text-xl font-medium mt-6">6.1.</h3>
          <p className="text-muted-foreground">
            You agree to indemnify and hold the Company and its directors, shareholders, employee, affiliates, agents, or licensors harmless from: (i) any actions, claims, demands, suits, damages, losses, penalties, interest and other charges and expenses (including legal fees and other dispute resolution costs) made by any person due to or arising out of Your use of the Services, any violation of the terms of these Terms or any other agreement executed with the Company or another person by You; (ii) any acts or deeds, including for any non-compliance or violation, of any applicable law, rules, regulations on Your part; (iii) for fraud committed by You; or (iv) Your infringement of any intellectual property or other right of any person or entity; or (v) as a result of any threatening, libelous, obscene, harassing or offensive material posted / transmitted by You on the Platform.
          </p>

          <h3 className="text-xl font-medium mt-6">6.2.</h3>
          <p className="text-muted-foreground">
            Your obligations under this Clause 6 shall survive the termination of these Terms in accordance with Clause 5 above.
          </p>

          <h2 className="text-2xl font-semibold mt-8">7. Intellectual Property</h2>
          <h3 className="text-xl font-medium mt-6">7.1.</h3>
          <p className="text-muted-foreground">
            This Platform is operated by and is the sole property of the Company. Any and all material on this Platform, including images, illustrations, audio and video clips, trade names, proprietary information and knowledge, technology, databases, or rights with respect thereto necessary for Our business as is now being operated are protected by copyrights, trademarks, and other intellectual property rights that are owned by Us or by other parties that have licensed such material to Us, or such parties having ownership of content uploaded on the Platform. You agree that any and all material displayed on the Platform is solely for Your personal use and You shall not, whether directly or indirectly, copy, reproduce, republish, post, upload, transmit or distribute such material in any manner and through any media including by way of e-mail or other electronic means and You shall not assist any other person in doing so.
          </p>

          <h3 className="text-xl font-medium mt-6">7.2.</h3>
          <p className="text-muted-foreground">
            The Company grants to You a temporary, non-exclusive, revocable, non-transferable limited license to use the Platform for Your own use. All right, title, and interest in and to the Platform (excluding content uploaded specifically by a user) is and will remain the exclusive property of the Company and/or its licensors.
          </p>

          <h2 className="text-2xl font-semibold mt-8">8. Confidentiality</h2>
          <h3 className="text-xl font-medium mt-6">8.1.</h3>
          <p className="text-muted-foreground">
            You are entirely liable for maintaining the confidentiality of the User Data, including any other verification information used on the Platform. All activities that occur using the User Data or other verification information supplied to or established by You with respect to Platform will be Your sole responsibility. The Company is not liable if the User Data is misused by You due to any reason whatsoever.
          </p>

          <h3 className="text-xl font-medium mt-6">8.2.</h3>
          <p className="text-muted-foreground">
            You are responsible not to share information which enables access/ usage of Platform to any third party. You should immediately notify the Company of any unauthorized use of the Platform, verification information, or any other breach of security. You agree that the Company will not be liable for any loss or damage arising from Your failure to comply with these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8">9. Limitation of Liability</h2>
          <h3 className="text-xl font-medium mt-6">9.1.</h3>
          <p className="text-muted-foreground">
            For each and every tender related information, an initial tender notice (issued by the Bidder) has been made available on the Website. The Suppliers are requested to read the tender notices very carefully.
          </p>

          <h3 className="text-xl font-medium mt-6">9.2.</h3>
          <p className="text-muted-foreground">
            To the extent permitted by applicable laws, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) Your use or inability to use the Services; (b) unauthorized access to or use of Our servers and/or any and all personal information stored therein; or (c) any interruption or cessation of transmission to or from the Services.
          </p>

          <h3 className="text-xl font-medium mt-6">9.3.</h3>
          <p className="text-muted-foreground">
            In the preparation of the Platform and contents therein, every effort has been made to offer the most current, correct, and clearly expressed information possible. Nevertheless, inadvertent errors may occur. Neither the Company nor any third party(s) provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on the Platform for any particular purpose.
          </p>

          <h3 className="text-xl font-medium mt-6">9.4.</h3>
          <p className="text-muted-foreground">
            Our Platform provides Users with access to tender documents and notices. Such information is provided on an "as is" and "as available" basis and We assume no liability for the accuracy, completeness, use, non-obsolescence, correctness, non-infringement, merchantability, or fitness of such information.
          </p>

          <h3 className="text-xl font-medium mt-6">9.5.</h3>
          <p className="text-muted-foreground">
            From time to time the Platform may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that We endorse the website(s). We have no responsibility for the content of the linked website(s).
          </p>

          <h3 className="text-xl font-medium mt-6">9.6.</h3>
          <p className="text-muted-foreground">
            Our Platform is merely a mode of connecting the Bidders and the Suppliers and We provide no guarantee to any Bidder for finding the Supplier for any tender listed on the Platform and We provide no guarantee to any Supplier towards securing a tender that they shall apply for through the Platform.
          </p>

          <h3 className="text-xl font-medium mt-6">9.7.</h3>
          <p className="text-muted-foreground">
            We do not participate in the bidding process, nor shall We act on behalf of either the Bidder or the Supplier and do not control the fulfillment of obligations by Bidders or Suppliers arising from the bidding process. We bear no responsibility and/or liability for any events taking place outside the Platform, and for the performance of any contractual obligations between the Bidders and Suppliers.
          </p>

          <h2 className="text-2xl font-semibold mt-8">10. Governing Law and Dispute Resolution</h2>
          <h3 className="text-xl font-medium mt-6">10.1.</h3>
          <p className="text-muted-foreground">
            These Terms shall be governed by and construed in accordance with the laws of the Republic of India and subject to the provisions of arbitration set out herein, the courts at Gurugram, Haryana, India shall have exclusive jurisdiction in relation to any Disputes arising out of or in connection with these Terms.
          </p>

          <h3 className="text-xl font-medium mt-6">10.2.</h3>
          <p className="text-muted-foreground">
            Any action, dispute or difference arising under or relating to this Terms ("Dispute") shall at the first instance be resolved through good faith negotiations between the parties hereto, which negotiations shall begin promptly, within 15 (fifteen) days after a party has delivered to the other party a written request for such consultation. If the parties are unable to resolve the Dispute in question within 15 (fifteen) days of the commencement of negotiations, such Dispute shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996.
          </p>

          <h3 className="text-xl font-medium mt-6">10.3.</h3>
          <p className="text-muted-foreground">
            The arbitration shall be conducted by a sole arbitrator jointly appointed by the Company and You. If parties fail to appoint an arbitrator within 30 (thirty) days after service of the notice of arbitration, such arbitrator shall be appointed in accordance with provisions of the Arbitration and Conciliation Act, 1996. The venue of arbitration shall be Gurugram, Haryana, India.
          </p>

          <h3 className="text-xl font-medium mt-6">10.4.</h3>
          <p className="text-muted-foreground">
            The language of the arbitration proceedings and of all written decisions and correspondence relating to the arbitration shall be English.
          </p>

          <h2 className="text-2xl font-semibold mt-8">11. Notice</h2>
          <p className="text-muted-foreground">
            All notices served by the Company shall be provided via email to Your account. Any notice to be provided to the Company should be sent to info@zenobid.com.
          </p>

          <h2 className="text-2xl font-semibold mt-8">12. Entire Agreement</h2>
          <p className="text-muted-foreground">
            The Terms, along with the Privacy Policy, and any other guidelines made applicable to the Platform from time to time, constitute the entire agreement between the Company and You with respect to Your access to or use of the Platform and the Services thereof.
          </p>

          <h2 className="text-2xl font-semibold mt-8">13. Force Majeure</h2>
          <p className="text-muted-foreground">
            In no event shall the Company be held liable for any failure to perform any of its obligations, if the performance is prevented, hindered or delayed by any event due to any cause beyond the reasonable control of a Party, including, without limitation, unavailability of any communication system, transmitters, sabotage, fire, vandals, flood, explosion, hacking, pandemic, lockdowns, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, strike, embargo, war or acts of government ("Force Majeure Event").
          </p>

          <h2 className="text-2xl font-semibold mt-8">14. Severability</h2>
          <p className="text-muted-foreground">
            If any term, provision, covenant, or restriction of these Terms is held by a court of competent jurisdiction to be invalid, void or unenforceable, the remainder of the terms, provisions, covenants and restrictions of these Terms shall remain in full force and effect and shall in no way be affected, impaired or invalidated.
          </p>

          <h2 className="text-2xl font-semibold mt-8">15. No Waiver</h2>
          <p className="text-muted-foreground">
            The rights and remedies available under this Terms may be exercised as often as necessary and are cumulative and not exclusive of rights or remedies provided by law. It may be waived only in writing. Delay in exercising or non-exercise of any such right or remedy does not constitute a waiver of that right or remedy, or any other right or remedy.
          </p>

          <h2 className="text-2xl font-semibold mt-8">16. No Relationship</h2>
          <p className="text-muted-foreground">
            You acknowledge that Your participation on the Platform and/or subscription to the Services, does not make You an employee or agency or partnership or joint venture or franchise of the Company.
          </p>

          <h2 className="text-2xl font-semibold mt-8">17. Contact Us</h2>
          <p className="text-muted-foreground">
            We make all best endeavors to provide You with a pleasant experience. In the unlikely event that You face any issues, please contact us at info@zenobid.com.
          </p>

          <h2 className="text-2xl font-semibold mt-8">18. Acceptance</h2>
          <p className="text-muted-foreground">
            By using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
