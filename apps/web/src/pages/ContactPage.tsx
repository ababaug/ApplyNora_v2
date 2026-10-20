
import { Helmet } from 'react-helmet-async';



export function ContactPage() {




  return (
    <>
      <Helmet>
        <title>Contact - ApplyNora</title>
      </Helmet>
      <main className="w-full pt-20 bg-surface-ground min-h-screen"><div className="flex flex-col w-full">
{/*  Subtle decorative ambient glow container  */}
<div className="relative w-full overflow-hidden px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
{/*  Header / Hero Anchor  */}
<div className="relative max-w-5xl mx-auto flex flex-col items-center text-center space-y-space-md mb-space-xl">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-blush-subtle text-primary shadow-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="font-caption text-caption tracking-wider uppercase font-semibold">DIRECT ACCESS & EXECUTIVE CONCIERGE</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight max-w-4xl">
        We’re Here to Help You Navigate Every Transition.
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Whether you have technical architecture inquiries, enterprise executive concierge needs, or billing questions regarding Paystack, our senior team is ready.
      </p>
{/*  Micro Global Status Bar  */}
<div className="pt-space-xs flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-space-xs rounded-full shadow-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
</span>
<span className="font-label-sm text-label-sm text-on-surface">All Microservices & Support Lines Operational</span>
<span className="text-outline-variant font-caption text-caption">•</span>
<span className="font-caption text-caption text-success font-semibold">99.98% Uptime</span>
</div>
</div>
{/*  2-Column Main Section  */}
<div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  Left Column: Encrypted Submission Console (7 cols)  */}
<div className="lg:col-span-7 bg-surface-card rounded-xl p-space-lg md:p-space-xl shadow-sm flex flex-col space-y-space-lg">
<div className="flex flex-col space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-caption text-caption text-primary uppercase font-bold tracking-wider">Priority Inbound Dispatch</span>
<span className="font-caption text-caption text-slate-muted flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">lock</span> 256-Bit SSL
            </span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface">Dispatch an Inbound Inquiry</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Select the relevant desk to accelerate review by our senior engineers and advisory specialists.
          </p>
</div>
<form className="flex flex-col space-y-space-md" id="contactForm">
{/*  Inquiry Pill Selector  */}
<div className="flex flex-col space-y-space-xs">
<label className="font-label-sm text-label-sm text-on-surface">Routing Channel / Department</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs" id="channelPillGroup">
<button className="channel-pill flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-blush-subtle text-primary font-label-md text-label-md text-left transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
<span>General Support</span>
</button>
<button className="channel-pill flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-ground text-on-surface-variant font-label-md text-label-md text-left transition-all hover:bg-surface-blush-subtle hover:text-primary" type="button">
<span className="material-symbols-outlined text-[18px]">workspace_premium</span>
<span>Executive Concierge (Enterprise)</span>
</button>
<button className="channel-pill flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-ground text-on-surface-variant font-label-md text-label-md text-left transition-all hover:bg-surface-blush-subtle hover:text-primary" type="button">
<span className="material-symbols-outlined text-[18px]">shield_person</span>
<span>Security / Privacy Inquiries</span>
</button>
<button className="channel-pill flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-ground text-on-surface-variant font-label-md text-label-md text-left transition-all hover:bg-surface-blush-subtle hover:text-primary" type="button">
<span className="material-symbols-outlined text-[18px]">credit_card</span>
<span>Paystack Billing</span>
</button>
</div>
<input id="selectedDepartment" type="hidden" value="General Support" />
</div>
{/*  Name & Email Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col space-y-1">
<label className="font-label-sm text-label-sm text-on-surface" htmlFor="fullName">Full Name</label>
<input className="w-full px-space-md py-space-sm rounded-lg bg-surface-ground text-on-surface placeholder-outline focus:outline-none focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(142,30,162,0.25)] transition-all font-body-md text-body-md" id="fullName" placeholder="e.g. Dr. Ngozi Adeyemi" required type="text" />
</div>
<div className="flex flex-col space-y-1">
<label className="font-label-sm text-label-sm text-on-surface" htmlFor="email">Professional Email</label>
<input className="w-full px-space-md py-space-sm rounded-lg bg-surface-ground text-on-surface placeholder-outline focus:outline-none focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(142,30,162,0.25)] transition-all font-body-md text-body-md" id="email" placeholder="ngozi@enterprise.org" required type="email" />
</div>
</div>
{/*  Current Role / Enterprise Organization (Optional)  */}
<div className="flex flex-col space-y-1">
<div className="flex justify-between items-center">
<label className="font-label-sm text-label-sm text-on-surface" htmlFor="roleOrg">Current Role & Organization</label>
<span className="font-caption text-caption text-outline">Optional</span>
</div>
<input className="w-full px-space-md py-space-sm rounded-lg bg-surface-ground text-on-surface placeholder-outline focus:outline-none focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(142,30,162,0.25)] transition-all font-body-md text-body-md" id="roleOrg" placeholder="e.g. Managing Director • Standard Chartered Bank" type="text" />
</div>
{/*  Subject Line  */}
<div className="flex flex-col space-y-1">
<label className="font-label-sm text-label-sm text-on-surface" htmlFor="subject">Subject</label>
<input className="w-full px-space-md py-space-sm rounded-lg bg-surface-ground text-on-surface placeholder-outline focus:outline-none focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(142,30,162,0.25)] transition-all font-body-md text-body-md" id="subject" placeholder="e.g. Dedicated Sandbox Deployment & Confidential NDA" required type="text" />
</div>
{/*  Message Area  */}
<div className="flex flex-col space-y-1">
<label className="font-label-sm text-label-sm text-on-surface" htmlFor="message">Confidential Message</label>
<textarea className="w-full px-space-md py-space-sm rounded-lg bg-surface-ground text-on-surface placeholder-outline focus:outline-none focus:bg-surface-card focus:shadow-[0_0_0_2px_rgba(142,30,162,0.25)] transition-all font-body-md text-body-md resize-none" id="message" placeholder="Provide details regarding your target transition horizon, system architecture question, or invoice reference..." required rows={5}></textarea>
</div>
{/*  Security Privacy Safeguard Note  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">verified_user</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Encrypted submission with tenant privacy safeguards. We strictly adhere to zero-telemetry harvesting and never share or sell contact data.
            </p>
</div>
{/*  Primary Submit Action  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-space-xs text-outline font-caption text-caption">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>Average response: under 2.4 hours</span>
</div>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs font-label-md text-label-md text-on-primary bg-gradient-to-r from-primary-container to-secondary hover:brightness-105 active:scale-95 px-space-xl py-space-sm rounded-lg shadow-md transition-all" id="submitBtn" type="submit">
<span className="material-symbols-outlined text-[20px]">send</span>
<span>Send Encrypted Message</span>
</button>
</div>
{/*  Success Notification Banner (Toggled via JS)  */}
<div className="hidden p-space-md rounded-lg bg-success/10 text-success flex items-center justify-between" id="formSuccessToast">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
<span className="font-label-md text-label-md">Transmission received. Our executive liaison has been alerted.</span>
</div>
<button className="hover:opacity-75" type="button">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</form>
</div>
{/*  Right Column: Direct Channels, Hubs & SLAs (5 cols)  */}
<div className="lg:col-span-5 flex flex-col space-y-space-md">
{/*  SLA Elevation Card  */}
<div className="bg-gradient-to-br from-primary-container to-secondary text-on-primary rounded-xl p-space-lg shadow-sm relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-surface-blush/20 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-caption text-caption uppercase tracking-wider text-primary-fixed font-bold">Guaranteed Performance SLA</span>
<div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">speed</span>
</div>
</div>
<div className="flex items-baseline gap-space-xs mb-space-xs">
<span className="font-headline-lg text-headline-lg tracking-tight">&lt; 4 Hours</span>
<span className="font-label-md text-label-md text-primary-fixed">Executive Tier</span>
</div>
<p className="font-body-sm text-body-sm text-surface-blush-subtle mb-space-sm">
            C-Suite, VP, and Director accounts have dedicated human-in-the-loop triage. Standard member requests are resolved in &lt; 24h.
          </p>
<div className="flex items-center gap-space-sm pt-space-xs">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-surface-blush flex items-center justify-center text-primary font-bold text-caption shadow-sm">NA</div>
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-caption shadow-sm">FO</div>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-secondary font-bold text-caption shadow-sm">KC</div>
</div>
<span className="font-caption text-caption text-white/90">Senior Advisory Cohort On-Call</span>
</div>
</div>
{/*  Direct Departmental Channels  */}
<div className="bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Direct Desks</h3>
<span className="font-caption text-caption text-outline uppercase font-semibold">Instant Escalation</span>
</div>
{/*  Channel 1: VIP Onboarding  */}
<div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-ground hover:bg-surface-blush-subtle transition-colors group">
<div className="w-10 h-10 rounded-xl bg-surface-blush-subtle text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-all shrink-0">
<span className="material-symbols-outlined text-[20px]">diamond</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Executive Onboarding Desk</span>
<span className="font-caption text-caption bg-surface-blush/40 text-primary px-2 py-0.5 rounded-full">VIP Priority</span>
</div>
<a className="font-body-sm text-body-sm text-secondary hover:underline truncate" href="mailto:vip@applynora.ai">vip@applynora.ai</a>
<span className="font-caption text-caption text-slate-muted">Private onboarding, white-glove migration, executive portfolio tailoring.</span>
</div>
</div>
{/*  Channel 2: Security & NDPA Desk  */}
<div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-ground hover:bg-surface-blush-subtle transition-colors group">
<div className="w-10 h-10 rounded-xl bg-surface-blush-subtle text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-all shrink-0">
<span className="material-symbols-outlined text-[20px]">key</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Security & Compliance Desk</span>
<span className="font-caption text-caption bg-surface-container text-success px-2 py-0.5 rounded-full">NDPA / GDPR</span>
</div>
<a className="font-body-sm text-body-sm text-secondary hover:underline truncate" href="mailto:security@applynora.ai">security@applynora.ai</a>
<div className="flex items-center gap-1 font-caption text-caption text-slate-muted pt-0.5">
<span className="material-symbols-outlined text-[13px] text-outline">fingerprint</span>
<span className="font-mono text-[10px] text-outline truncate">PGP: 4A7F 90B2 331C E55D FD90</span>
</div>
</div>
</div>
{/*  Channel 3: Paystack Billing  */}
<div className="flex items-start gap-space-md p-space-sm rounded-lg bg-surface-ground hover:bg-surface-blush-subtle transition-colors group">
<div className="w-10 h-10 rounded-xl bg-surface-blush-subtle text-primary group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-all shrink-0">
<span className="material-symbols-outlined text-[20px]">receipt_long</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center justify-between gap-space-xs">
<span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">Billing & Paystack Inquiries</span>
<span className="font-caption text-caption bg-surface-container text-outline px-2 py-0.5 rounded-full">Automated Invoicing</span>
</div>
<a className="font-body-sm text-body-sm text-secondary hover:underline truncate" href="mailto:billing@applynora.ai">billing@applynora.ai</a>
<span className="font-caption text-caption text-slate-muted">Instant VAT-receipting, Paystack currency adjustments, corporate licenses.</span>
</div>
</div>
</div>
{/*  Physical Legal Entity & Operating Hubs  */}
<div className="bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Regional Headquarters</h3>
<span className="font-caption text-caption text-slate-muted flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-success"></span> Active Field Office
            </span>
</div>
{/*  Hub Map / Visual Representation  */}
<div className="w-full h-36 bg-cover bg-center rounded-lg shadow-inner relative flex items-end p-space-sm" data-location="Victoria Island, Lagos, Nigeria">
<div className="bg-surface-card/90 backdrop-blur-md px-space-sm py-space-xs rounded-md shadow-sm flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
<span className="font-label-sm text-label-sm text-on-surface">Victoria Island Hub • West Africa</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div className="flex flex-col space-y-1">
<span className="font-label-md text-label-md text-on-surface">Lagos Office</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Plot 12, Adeola Odeku St,<br />
                Victoria Island, Lagos, Nigeria
              </p>
<span className="font-caption text-caption text-slate-muted">Regulated under NDPA Framework</span>
</div>
<div className="flex flex-col space-y-1">
<span className="font-label-md text-label-md text-on-surface">Global Remote Concierge</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                London • New York • Nairobi<br />
                Asynchronous 24/7 routing
              </p>
<span className="font-caption text-caption text-slate-muted">High-Availability Encrypted Relay</span>
</div>
</div>
</div>
</div>
</div>
{/*  Bottom Quick FAQ Accordion Section  */}
<div className="max-w-4xl mx-auto mt-space-xl pt-space-lg flex flex-col space-y-space-lg">
<div className="flex flex-col items-center text-center space-y-space-xs">
<span className="font-caption text-caption text-primary uppercase font-bold tracking-wider">Fast Answers</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Frequently Consulted Protocols</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
          Quick details on bespoke advisory consultations and formal statutory NDPA regulatory handling.
        </p>
</div>
<div className="flex flex-col space-y-space-sm">
{/*  FAQ Item 1  */}
<div className="faq-item bg-surface-card rounded-xl overflow-hidden shadow-sm transition-all">
<button className="w-full p-space-md md:p-space-lg flex items-center justify-between text-left hover:bg-surface-blush-subtle/50 transition-colors" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">calendar_month</span>
              Can I book a 1-on-1 architecture review?
            </span>
<span className="faq-icon material-symbols-outlined text-outline transition-transform duration-300">expand_more</span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-space-md md:px-space-lg bg-surface-ground/50">
<div className="py-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Yes. Enterprise Tier account holders and institutional talent sponsors receive direct 45-minute virtual architecture sessions with our Principal Engineers and Executive Career Strategists. To coordinate, select <strong>Executive Concierge (Enterprise)</strong> in the dispatch form above or notify <a className="text-secondary font-semibold hover:underline" href="mailto:vip@applynora.ai">vip@applynora.ai</a> with your corporate domain.
            </div>
</div>
</div>
{/*  FAQ Item 2  */}
<div className="faq-item bg-surface-card rounded-xl overflow-hidden shadow-sm transition-all">
<button className="w-full p-space-md md:p-space-lg flex items-center justify-between text-left hover:bg-surface-blush-subtle/50 transition-colors" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">policy</span>
              How do I submit an NDPA data access request?
            </span>
<span className="faq-icon material-symbols-outlined text-outline transition-transform duration-300">expand_more</span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-space-md md:px-space-lg bg-surface-ground/50">
<div className="py-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
              In strict accordance with the Nigeria Data Protection Act (NDPA) and international GDPR principles, users may request complete telemetry extraction or cryptographic account expungement at any point. Submit your ticket via the <strong>Security / Privacy Inquiries</strong> route or write straight to our Data Protection Officer at <a className="text-secondary font-semibold hover:underline" href="mailto:security@applynora.ai">security@applynora.ai</a>. Requests are validated and executed within 72 business hours.
            </div>
</div>
</div>
{/*  FAQ Item 3  */}
<div className="faq-item bg-surface-card rounded-xl overflow-hidden shadow-sm transition-all">
<button className="w-full p-space-md md:p-space-lg flex items-center justify-between text-left hover:bg-surface-blush-subtle/50 transition-colors" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">payments</span>
              How are Paystack transactions reconciled and receipts issued?
            </span>
<span className="faq-icon material-symbols-outlined text-outline transition-transform duration-300">expand_more</span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-space-md md:px-space-lg bg-surface-ground/50">
<div className="py-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
              All transactions processed via our Paystack gateway trigger instantaneous cryptographic webhooks that credit your account and issue an itemized tax-compliant VAT receipt to your registered billing email address. If your corporate finance team requires customized withholding tax receipts (WHT) or specific corporate invoice headers, our dedicated desk at <a className="text-secondary font-semibold hover:underline" href="mailto:billing@applynora.ai">billing@applynora.ai</a> delivers them within same-day banking hours.
            </div>
</div>
</div>
</div>
{/*  Trust Footer Callout  */}
<div className="p-space-lg rounded-xl bg-surface-card shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-blush-subtle text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">headset_mic</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Urgent Transition Escalation?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Active search campaigns requiring immediate pause or executive profile obfuscation.</p>
</div>
</div>
<a className="w-full md:w-auto inline-flex items-center justify-center gap-space-xs font-label-md text-label-md text-primary hover:bg-surface-blush-subtle px-space-lg py-space-sm rounded-lg transition-colors" href="mailto:vip@applynora.ai?subject=URGENT:%20Transition%20Escalation">
<span>Notify Concierge Lead</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/*  Inline Micro-Interaction Controller  */}

</div></main>
    </>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
