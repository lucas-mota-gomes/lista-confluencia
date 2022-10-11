import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaConfluenciaComponent } from './pages/lista-confluencia/lista-confluencia.component';
import { TimerZoneMapComponent } from './pages/timer-zone-map/timer-zone-map.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: HeaderComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'lista-confluencia', component: ListaConfluenciaComponent },
      { path: 'timer-zone', component: TimerZoneMapComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
