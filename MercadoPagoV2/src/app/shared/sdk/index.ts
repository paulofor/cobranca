/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';

import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { ExemploModeloApi } from './services/custom/ExemploModelo';
import { TreinoAcademia_GrupoMuscularApi } from './services/custom/TreinoAcademia_GrupoMuscular';
import { TreinoAcademia_SerieTreinoApi } from './services/custom/TreinoAcademia_SerieTreino';
import { TreinoAcademia_ExercicioApi } from './services/custom/TreinoAcademia_Exercicio';
import { TreinoAcademia_ExecucaoItemSerieApi } from './services/custom/TreinoAcademia_ExecucaoItemSerie';
import { TreinoAcademia_CargaPlanejadaApi } from './services/custom/TreinoAcademia_CargaPlanejada';
import { TreinoAcademia_DiaTreinoApi } from './services/custom/TreinoAcademia_DiaTreino';
import { TreinoAcademia_ItemSerieApi } from './services/custom/TreinoAcademia_ItemSerie';
import { TreinoAcademia_RegistroPesoApi } from './services/custom/TreinoAcademia_RegistroPeso';
import { TreinoAcademia_UsuarioApi } from './services/custom/TreinoAcademia_Usuario';
import { TesteBaseApi } from './services/custom/TesteBase';
import { TreinoAcademia_ExecucaoCargaApi } from './services/custom/TreinoAcademia_ExecucaoCarga';
import { PagSeguroApi } from './services/custom/PagSeguro';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        SDKModels,
        RealTime,
        UserApi,
        ExemploModeloApi,
        TreinoAcademia_GrupoMuscularApi,
        TreinoAcademia_SerieTreinoApi,
        TreinoAcademia_ExercicioApi,
        TreinoAcademia_ExecucaoItemSerieApi,
        TreinoAcademia_CargaPlanejadaApi,
        TreinoAcademia_DiaTreinoApi,
        TreinoAcademia_ItemSerieApi,
        TreinoAcademia_RegistroPesoApi,
        TreinoAcademia_UsuarioApi,
        TesteBaseApi,
        TreinoAcademia_ExecucaoCargaApi,
        PagSeguroApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser },

      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

