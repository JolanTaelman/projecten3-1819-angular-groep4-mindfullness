import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OefeningComponent } from './oefening/oefening.component';
import { SessieComponent } from './sessie/sessie.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { OefeningenLijstComponent } from './oefeningen-lijst/oefeningen-lijst.component';
import { SessieLijstComponent } from './sessie-lijst/sessie-lijst.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BerichtenComponent } from './berichten/berichten.component';
import { SessieoverzichtComponent } from './sessieoverzicht/sessieoverzicht.component';
import { KlantComponent } from './klant/klant.component';
import { KlantenLijstComponent } from './klanten-lijst/klanten-lijst.component';
import { HomeComponent } from './home/home.component';
import { OefeningOverzichtComponent } from './oefening-overzicht/oefening-overzicht.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'berichten', component: BerichtenComponent },
  { path: 'sessieoverzicht', component: SessieoverzichtComponent },
  { path: 'klanten', component: KlantenLijstComponent},
  { path: 'oefeningen', component: OefeningOverzichtComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OefeningComponent,
    SessieComponent,
    MainNavComponent,
    OefeningenLijstComponent,
    SessieLijstComponent,
    PagenotfoundComponent,
    BerichtenComponent,
    SessieoverzichtComponent,
    KlantComponent,
    KlantenLijstComponent,
    HomeComponent,
    OefeningOverzichtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
