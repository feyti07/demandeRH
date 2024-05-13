import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListDemandeComponent } from './pages/list-demande/list-demande.component';
import { ListReclamationComponent } from './pages/list-reclamation/list-reclamation.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { MainAdminPageComponent } from './main-admin-page/main-admin-page.component';
import { AjoutDemandeComponent } from './pages/ajout-demande/ajout-demande.component';
import { HttpInterceptorService } from '../services/http-interceptor.service';
import { SideBarComponent } from './pages/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    ListDemandeComponent,
    ListReclamationComponent,
    ConfirmRegisterComponent,
    AdminDashboardComponent,
    MenuComponent,
    MainAdminPageComponent,
    AjoutDemandeComponent,
    SideBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
