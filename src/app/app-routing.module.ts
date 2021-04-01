import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { CookiePolicyComponent } from './components/pages/cookie-policy/cookie-policy.component';
import { DataSecurityComponent } from './components/pages/data-security/data-security.component';
import { FosterCarerComponent } from './components/pages/foster-carer/foster-carer.component';
import { FosteringTypesComponent } from './components/pages/fostering-types/fostering-types.component';
import { GdprPolicyComponent } from './components/pages/gdpr-policy/gdpr-policy.component';
import { HelpComponent } from './components/pages/help/help.component';
import { HomeComponent } from './components/pages/home/home.component';
import { JobsVolunteeringComponent } from './components/pages/jobs-volunteering/jobs-volunteering.component';
import { LatestNewsComponent } from './components/pages/latest-news/latest-news.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { RegulationsStandardsComponent } from './components/pages/regulations-standards/regulations-standards.component';
import { SiteMapComponent } from './components/pages/site-map/site-map.component';
import { SupportComponent } from './components/pages/support/support.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { TransferComponent } from './components/pages/transfer/transfer.component';
import { VisionComponent } from './components/pages/vision/vision.component';
import { WhoCanFosterComponent } from './components/pages/who-can-foster/who-can-foster.component';
import { WhyFosterComponent } from './components/pages/why-foster/why-foster.component';
import { WhyUsComponent } from './components/pages/why-us/why-us.component';
import { BecomeAFosterCareComponent } from './components/pages/become-a-foster-care/become-a-foster-care.component';
import { MockingbirdFamilyModelComponent } from './components/pages/mockingbird-family-model/mockingbird-family-model.component';
import { CarersAndParentsComponent } from './components/pages/carers-and-parents/carers-and-parents.component';
import { FosterAgencyComponent } from './components/pages/foster-agency/foster-agency.component';
import { LocalAuthoritiesComponent } from './components/pages/local-authorities/local-authorities.component';
import { TherapeuticFosteringComponent } from './components/pages/therapeutic-fostering/therapeutic-fostering.component';
import { CanIFosterComponent } from './components/pages/can-i-foster/can-i-foster.component';
import { EnquireNowComponent } from './components/pages/enquire-now/enquire-now.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'why-foster', component: WhyFosterComponent},
    {path: 'who-can-foster', component: WhoCanFosterComponent},
    {path: 'fostering-types', component: FosteringTypesComponent},
    {path: 'foster-carer', component: FosterCarerComponent},
    {path: 'transfer', component: TransferComponent},
    {path: 'why-us', component: WhyUsComponent},
    {path: 'support', component: SupportComponent},
    {path: 'regulations-standards', component: RegulationsStandardsComponent},
    {path: 'vision', component: VisionComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'help', component: HelpComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'latest-news', component: LatestNewsComponent},
    {path: 'data-security', component: DataSecurityComponent},
    {path: 'cookie-policy', component: CookiePolicyComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-and-conditionsprivacy-policy', component: TermsAndConditionsComponent},
    {path: 'jobs-volunteering', component: JobsVolunteeringComponent},
    {path: 'gdpr-policy', component: GdprPolicyComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'site-map', component: SiteMapComponent},
    {path: 'become-a-foster-care', component: BecomeAFosterCareComponent},
    {path: 'app-mockingbird-family-model', component: MockingbirdFamilyModelComponent},
    {path: 'app-carers-and-parents', component: CarersAndParentsComponent},
    {path: 'app-foster-agency', component: FosterAgencyComponent},
    {path: 'app-local-authorities', component: LocalAuthoritiesComponent},
    {path: 'app-therapeutic-fostering', component: TherapeuticFosteringComponent},
    {path: 'app-can-i-foster', component: CanIFosterComponent},
    {path: 'enquire-now', component: EnquireNowComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
