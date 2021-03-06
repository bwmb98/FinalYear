import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'testing', component:TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
