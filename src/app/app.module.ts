import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';
import { ViewPage } from '../pages/view/view';
import { AddUserPage } from '../pages/addUser/addUser';
import { EditPage } from '../pages/edit/edit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { InterfaceProvider } from '../providers/interface/interface';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddPage,
    AddUserPage,
    ViewPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddPage,
    AddUserPage,
    ViewPage,
    EditPage
  ],
  providers: [
    StatusBar,
    InterfaceProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
