import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactUsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
