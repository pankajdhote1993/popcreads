import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component'; 

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
