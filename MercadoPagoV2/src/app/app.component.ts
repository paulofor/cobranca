import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { TestePagSeguroPage } from '../pages/teste-pag-seguro/teste-pag-seguro';
import { PagSeguroLightPage } from '../pages/pag-seguro-light/pag-seguro-light';
import { PagSeguroPlanoPage } from '../pages/pag-seguro-plano/pag-seguro-plano';
import { PagSeguroAssinaturaDadoClientePage } from '../pages/pag-seguro-assinatura-dado-cliente/pag-seguro-assinatura-dado-cliente';
import { PagSeguroAssinaturaDadoCartaoPage } from '../pages/pag-seguro-assinatura-dado-cartao/pag-seguro-assinatura-dado-cartao';
import { PagSeguroAssinaturaDadoIdentificacaoPage } from '../pages/pag-seguro-assinatura-dado-identificacao/pag-seguro-assinatura-dado-identificacao';
import { InicioFluxoPage } from '../pages/inicio-fluxo/inicio-fluxo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Fluxo Assinatura', component: InicioFluxoPage },
      { title: '1- Endereco', component: PagSeguroAssinaturaDadoClientePage },
      { title: '2- Identificacao', component: PagSeguroAssinaturaDadoIdentificacaoPage },
      { title: '3- Cartao', component: PagSeguroAssinaturaDadoCartaoPage },
      { title: 'PagSeguroPlano', component: PagSeguroPlanoPage },
      { title: 'PagSeguro', component: TestePagSeguroPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
