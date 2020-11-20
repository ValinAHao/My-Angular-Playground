import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  // { path: '', redirectTo: '/landing', pathMatch: 'full' },
  // { path: 'landing', component: LandingComponent },
  // { path: 'question-and-answer', loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule) },
  // { path: 'login/:environment', component: LoginComponent },
  // { path: 'login/:environment/:language', component: LoginComponent },
  // { path: '**', component: PageNotFoundComponent }
];

export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy, relativeLinkResolution: 'legacy' });
