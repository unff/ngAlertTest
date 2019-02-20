import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './inventory/main/main.component';
import { AlertComponent } from './alerts/alert/alert.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Set the route with a path (url fragment) and the component that should load when that fragment is hit

const routes: Routes = [
    { path: 'alerts', component: AlertComponent},
    { path: 'inventory', component: MainComponent},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
