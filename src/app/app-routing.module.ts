import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListDemandeComponent } from './pages/list-demande/list-demande.component';
import { ConfirmRegisterComponent } from './pages/confirm-register/confirm-register.component';
import { MainAdminPageComponent } from './main-admin-page/main-admin-page.component';
import { AjoutDemandeComponent } from './pages/ajout-demande/ajout-demande.component';
import { TokenGuardService } from '../services/guard/token-guard/token-guard.service';
import { AdminGuardService } from '../services/guard/admin-guard/admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: HomeComponent },
  { path: 'dash',
   component: DashboardComponent,
   canActivate : [TokenGuardService, AdminGuardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'listD', component: ListDemandeComponent },
  { path: 'confirm-register', component: ConfirmRegisterComponent },
  { path: 'admin', component: MainAdminPageComponent },
  { path: 'create', component: AjoutDemandeComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
