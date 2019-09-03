import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Product/Home/home.component';
import { AddComponent } from './Product/Add/add.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"add", component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
