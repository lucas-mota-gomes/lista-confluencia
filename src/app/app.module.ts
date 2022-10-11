import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TimerZoneMapComponent } from './pages/timer-zone-map/timer-zone-map.component';
import { ListaConfluenciaComponent } from './pages/lista-confluencia/lista-confluencia.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from "@angular/common/http";
import { TimerZoneService } from './services/timer-zone.service';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HeaderComponent } from './component/header/header.component';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimerZoneMapComponent,
    ListaConfluenciaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClipboardModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    MenuModule
  ],
  providers: [TimerZoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
