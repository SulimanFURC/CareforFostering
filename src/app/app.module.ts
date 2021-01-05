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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PartnerComponent,
    PremiumAccessComponent,
    SubscribeComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
