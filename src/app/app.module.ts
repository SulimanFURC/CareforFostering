import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { PremiumAccessComponent } from './components/common/premium-access/premium-access.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WhyFosterComponent } from './components/pages/why-foster/why-foster.component';
import { WhoCanFosterComponent } from './components/pages/who-can-foster/who-can-foster.component';
import { FosteringTypesComponent } from './components/pages/fostering-types/fostering-types.component';
import { FosterCarerComponent } from './components/pages/foster-carer/foster-carer.component';
import { TransferComponent } from './components/pages/transfer/transfer.component';
import { WhyUsComponent } from './components/pages/why-us/why-us.component';
import { SupportComponent } from './components/pages/support/support.component';
import { RegulationsStandardsComponent } from './components/pages/regulations-standards/regulations-standards.component';
import { VisionComponent } from './components/pages/vision/vision.component';
import { EnquireUsComponent } from './components/pages/enquire-us/enquire-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { HelpComponent } from './components/pages/help/help.component';
import { LatestNewsComponent } from './components/pages/latest-news/latest-news.component';
import { DataSecurityComponent } from './components/pages/data-security/data-security.component';
import { CookiePolicyComponent } from './components/pages/cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { JobsVolunteeringComponent } from './components/pages/jobs-volunteering/jobs-volunteering.component';
import { GdprPolicyComponent } from './components/pages/gdpr-policy/gdpr-policy.component';
import { SiteMapComponent } from './components/pages/site-map/site-map.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PartnerComponent,
    PremiumAccessComponent,
    SubscribeComponent,
    ContactUsComponent,
    HomeComponent,
    WhyFosterComponent,
    WhoCanFosterComponent,
    FosteringTypesComponent,
    FosterCarerComponent,
    TransferComponent,
    WhyUsComponent,
    SupportComponent,
    RegulationsStandardsComponent,
    VisionComponent,
    EnquireUsComponent,
    BlogComponent,
    HelpComponent,
    LatestNewsComponent,
    DataSecurityComponent,
    CookiePolicyComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    JobsVolunteeringComponent,
    GdprPolicyComponent,
    SiteMapComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
