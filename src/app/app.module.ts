import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

// Pages
import { ConfigurationPage } from '../pages/configuration/configuration';
import { FamilyPage } from '../pages/family/family';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SignupPage } from '../pages/signup/signup';

// Tabs
import { TabsPage } from '../pages/tabs/tabs';

// Services
import { HttpService } from './../services/http.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ConfigurationPage,
    FamilyPage,
    LoginPage,
    NotificationsPage,
    SignupPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConfigurationPage,
    FamilyPage,
    LoginPage,
    NotificationsPage,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
