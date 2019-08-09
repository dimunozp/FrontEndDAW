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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
