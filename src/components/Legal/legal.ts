export type LegalPolicy = {
  id: string;
  title: string;
  lastUpdated: string;
  markdown: string;
};

export const legalPolicies: LegalPolicy[] = [
  {
    id: "terms-of-use",
    title: "Terms of Use",
    lastUpdated: "21/09/2026",
    markdown: `These terms govern your use of this website and your relationship with Advanta Services LTD when you enquire through it.

### Using this website
By using this site you agree to these terms. If you do not agree, please do not use the site.

### Enquiries and services
Information on this website is for general guidance. Quotes, contracts and on-site work are subject to separate agreement.

### Liability
Nothing in these terms excludes or limits liability that cannot be excluded under applicable law. We do not accept liability for any loss arising from reliance on website content where it is not reasonably foreseeable.

### Changes
We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.

For questions, contact us at chris@advantaservices.co.uk.`,
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "21/09/2026",
    markdown: `Advanta Services LTD is committed to protecting your personal data and handling it responsibly.

### What we collect
- Your name, email address, phone number, postcode and any information you submit through contact forms.
- Photos or documents you attach to an enquiry.
- Basic technical information used to keep the site working and to protect forms from spam.

### How we use your information
- To respond to enquiries and provide electrical and air-conditioning services.
- To protect the website and enquiry forms from spam and automated submissions.
- To measure website traffic where you have accepted analytics cookies.

### Data sharing
We do not sell your personal data. We only share information with trusted providers where necessary to operate the website, send enquiry emails, protect forms from spam, or comply with the law.

### Data retention
We keep personal data only for as long as needed for operational, legal and customer-service purposes.

### Your rights
You may request access, correction or deletion of your personal data by contacting us at chris@advantaservices.co.uk.
`,
  },
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "21/09/2026",
    markdown: `This site uses cookies and similar technologies so the website functions correctly, supports security features, and, if you choose, measures usage.

### Essential cookies and technologies
These are required for the site to work and do not require your consent:
- Theme preference and cookie consent choice.
- Security and anti-spam technologies, including Cloudflare Turnstile on the contact form.

### Analytics cookies (optional)
If a Google Analytics measurement ID is configured, analytics cookies load only after you choose **Accept**.

If you choose **Essential only**, analytics cookies are not set.

You can change your mind by clearing this site's cookies in your browser and visiting again.
`,
  },
];
