import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarObjetoPerdidoComponent } from './registrar-objeto-perdido/registrar-objeto-perdido.component';
import { PerdidosComponent } from './perdidos/perdidos.component';
import { InformacionDetalladaComponent } from './informacion-detallada/informacion-detallada.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EquipoComponent } from './equipo/equipo.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BuscarObjetoPerdidoComponent } from './buscar-objeto-perdido/buscar-objeto-perdido.component';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
    { path: '', component: IndexComponent },
    { path: 'buscar-objeto-perdido', component: BuscarObjetoPerdidoComponent },
    { path: 'contacto',component: ContactoComponent},
    { path:'detalles',component: DetallesComponent},
     { path:'equipo',component: EquipoComponent},
     { path:'informacion-detallada',component: InformacionDetalladaComponent},
     { path:'perdidos',component: PerdidosComponent},
     {path:'registrar-objeto-perdido',component:RegistrarObjetoPerdidoComponent}
   ];

@NgModule({
  declarations: [
    AppComponent,
    RegistrarObjetoPerdidoComponent,
    PerdidosComponent,
    InformacionDetalladaComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    EquipoComponent,
    DetallesComponent,
    ContactoComponent,
    BuscarObjetoPerdidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
