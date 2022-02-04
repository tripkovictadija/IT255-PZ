import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { DoktorService } from './service/doktor.service';
import { DoktorComponent } from './pages/doktor/doktor.component';
import { DoktorSingleComponent } from './pages/doktor-single/doktor-single.component';
import { DoktorEffect } from './store/effect/doktor.effect';
import { HeaderComponent } from './pages/header/header.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { ZakaziComponent } from './pages/zakazi/zakazi.component';
import { SviTerminiComponent } from './pages/svi-termini/svi-termini.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistracijaComponent } from './pages/registracija/registracija.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ZakazivanjeComponent } from './pages/zakazivanje/zakazivanje.component';
import { ZakazivanjeSingleComponent } from './pages/zakazivanje-single/zakazivanje-single.component';
import { ZakazivanjeService } from './service/zakazivanje.service';
import { ZakazivanjeEffect } from './store/effect/zakazivanje.effect';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IzmenaComponent } from './pages/izmena/izmena.component';
import { FilterIme } from './pages/filter';
import { PrikazComponent } from './pages/prikaz/prikaz.component';

@NgModule({
  declarations: [
    AppComponent,
    DoktorComponent,
    DoktorSingleComponent,
    HeaderComponent,
    PocetnaComponent,
    ZakaziComponent,
    SviTerminiComponent,
    LoginComponent,
    RegistracijaComponent,
    FooterComponent,
    ZakazivanjeComponent,
    ZakazivanjeSingleComponent,
    IzmenaComponent,
    FilterIme,
    PrikazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([DoktorEffect, ZakazivanjeEffect]),
    StoreModule.forRoot(reducers)
  ],
  providers: [HttpClientModule, DoktorService, ZakazivanjeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
