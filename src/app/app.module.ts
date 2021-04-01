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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BecomeAFosterCareComponent } from './components/pages/become-a-foster-care/become-a-foster-care.component';
import { MockingbirdFamilyModelComponent } from './components/pages/mockingbird-family-model/mockingbird-family-model.component';
import { QuizForFosterComponent } from './components/pages/quiz-for-foster/quiz-for-foster.component';
import { CanIFosterComponent } from './components/pages/can-i-foster/can-i-foster.component';
import { CarersAndParentsComponent } from './components/pages/carers-and-parents/carers-and-parents.component';
import { FosterAgencyComponent } from './components/pages/foster-agency/foster-agency.component';
import { LocalAuthoritiesComponent } from './components/pages/local-authorities/local-authorities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TherapeuticFosteringComponent } from './components/pages/therapeutic-fostering/therapeutic-fostering.component';
import { EnquireNowComponent } from './components/pages/enquire-now/enquire-now.component';


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
    AboutUsComponent,
    BecomeAFosterCareComponent,
    MockingbirdFamilyModelComponent,
    QuizForFosterComponent,
    CanIFosterComponent,
    CarersAndParentsComponent,
    FosterAgencyComponent,
    LocalAuthoritiesComponent,
    TherapeuticFosteringComponent,
    EnquireNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
