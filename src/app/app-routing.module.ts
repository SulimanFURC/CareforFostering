import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { CookiePolicyComponent } from './components/pages/cookie-policy/cookie-policy.component';
import { DataSecurityComponent } from './components/pages/data-security/data-security.component';
import { EnquireUsComponent } from './components/pages/enquire-us/enquire-us.component';
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
    {path: 'enquire-us', component: EnquireUsComponent},
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
    {path: 'site-map', component: SiteMapComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
