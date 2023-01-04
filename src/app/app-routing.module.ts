import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewoneComponent } from './newone/newone.component';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { NewthreeComponent } from './newthree/newthree.component';

const routes: Routes = [
  {
    path:"newone",
    component:NewoneComponent,
    // outlet:"routeone"
  },
  {
    path:"newtwo",
    component:NewtwoComponent
  },
  {
    path:"newthree/:val/random/:val2",
    component:NewthreeComponent
  },
  {
    path:"",
    redirectTo:"newtwo",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
