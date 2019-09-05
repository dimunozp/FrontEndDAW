import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Graficos
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarObjetoPerdidoComponent } from './registrar-objeto-perdido/registrar-objeto-perdido.component';
import { PerdidosComponent } from './perdidos/perdidos.component';
import { InformacionDetalladaComponent } from './informacion-detallada/informacion-detallada.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EquipoComponent } from './equipo/equipo.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BuscarObjetoPerdidoComponent } from './buscar-objeto-perdido/buscar-objeto-perdido.component';
import { Routes, RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RegistroComponent } from './usuario/registro/registro.component';
/*import { LoginComponent } from './usuario/login/login.component';*/
import { Page404Component } from './page404/page404.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';


//servicios
import { DataApiService } from './servicios/data-api.service';
import { ReportesComponent } from './reportes/reportes.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { MisObjetosComponent } from './mis-objetos/mis-objetos.component';

import{ UploadService} from "./servicios/upload.service";
import { PruebaImagenComponent } from './prueba-imagen/prueba-imagen.component'
import { ImageUploadModule } from 'angular2-image-upload';

import { UsuarioNoRegistradoComponent } from './usuario-no-registrado/usuario-no-registrado.component';
import { SinAccesoComponent } from './sin-acceso/sin-acceso.component';





const rutas: Routes = [
    { path: '', component: IndexComponent },
    { path: 'buscar-objeto-perdido', component: BuscarObjetoPerdidoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'detalles', component: DetallesComponent },
    { path: 'equipo', component: EquipoComponent },
    { path: 'informacion-detallada/:id', component: InformacionDetalladaComponent },
    { path: 'perdidos', component: PerdidosComponent },
    { path: 'registrar-objeto-perdido', component: RegistrarObjetoPerdidoComponent },
    { path: 'mis-objetos', component: MisObjetosComponent },
    { path: 'usuario/registro', component: RegistroComponent },
    { path: 'usuario/login', component: NewLoginComponent },
    { path: 'usuario/perfil', component: PerfilComponent },
    { path: 'estadistica', component: EstadisticaComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'anuncios', component: AnunciosComponent },

    { path: 'prueba', component: PruebaImagenComponent },

    { path: 'usuario-no-registrado', component: UsuarioNoRegistradoComponent  },
    { path: 'sin-acceso', component: SinAccesoComponent   },

    { path: '**', component: Page404Component }

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
        BuscarObjetoPerdidoComponent,
        RegistroComponent,
        /*LoginComponent,*/
        Page404Component,
        PerfilComponent,
        EstadisticaComponent,
        ReportesComponent,
        NewLoginComponent,
        AnunciosComponent,
        MisObjetosComponent,
        PruebaImagenComponent,
        UsuarioNoRegistradoComponent,
        SinAccesoComponent

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        ChartsModule,

        ImageUploadModule.forRoot(),

        RouterModule.forRoot(rutas),
        LeafletModule.forRoot()
    ],
    providers: [DataApiService,UploadService],
    bootstrap: [AppComponent]
})
export class AppModule { }
