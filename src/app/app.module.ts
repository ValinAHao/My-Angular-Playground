import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { QuicklinkModule } from 'ngx-quicklink';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import * as fromApp from './stores/app.reducer';
import { SampleEffects } from './stores/sample-store/sample.effects';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const modules = [
  SharedModule
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QuicklinkModule,
    AppRoutingModule,
    LazyLoadImageModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([SampleEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
