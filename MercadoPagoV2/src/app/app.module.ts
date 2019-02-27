import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestePage } from '../pages/teste/teste';
import { MercadoPagoApi, SDKModels, LoopBackAuth, InternalStorage, PagSeguroApi } from './shared/sdk/index';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { TestePagSeguroPage } from '../pages/teste-pag-seguro/teste-pag-seguro';
import { PagSeguroLightPage } from '../pages/pag-seguro-light/pag-seguro-light';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestePage,
    TestePagSeguroPage,
    PagSeguroLightPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestePage,
    TestePagSeguroPage,
    PagSeguroLightPage
  ],
  providers: [

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient, 
    SocketConnection  , 
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    MercadoPagoApi,
    PagSeguroApi

  ]
})
export class AppModule {}
