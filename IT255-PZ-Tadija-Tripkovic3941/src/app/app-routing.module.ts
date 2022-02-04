import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoktorSingleComponent } from './pages/doktor-single/doktor-single.component';
import { DoktorComponent } from './pages/doktor/doktor.component';
import { IzmenaComponent } from './pages/izmena/izmena.component';
import { LoginComponent } from './pages/login/login.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { PrikazComponent } from './pages/prikaz/prikaz.component';
import { RegistracijaComponent } from './pages/registracija/registracija.component';
import { SviTerminiComponent } from './pages/svi-termini/svi-termini.component';
import { ZakaziComponent } from './pages/zakazi/zakazi.component';
import { DoktorService } from './service/doktor.service';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'doktori', component: DoktorComponent },
  { path: 'doktori/:id', component: DoktorSingleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'zakazi', component: ZakaziComponent },
  { path: 'svi-termini', component: SviTerminiComponent },
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'izmena/:id', component: IzmenaComponent },
  { path: 'prikaz/:id', component: PrikazComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
