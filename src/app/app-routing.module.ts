import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewoneComponent } from './newone/newone.component';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { NewthreeComponent } from './newthree/newthree.component';
import { NewfourComponent } from './newfour/newfour.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { RouteGuard1Guard } from './route-guard-1.guard';

const routes: Routes = [
  {
    path: "newone",
    component: NewoneComponent,
    canActivate:[RouteGuard1Guard]
  },
  {
    path: "newtwo",
    component: NewtwoComponent
  },
  {
    path: "newthree/:val/random/:val2",
    component: NewthreeComponent
  },
  {
    path: "",
    redirectTo: "newtwo",
    pathMatch: "full"
  },
  {
    path: "newfour",
    component: NewfourComponent
  },
  { 
    path: 'lazyMod', 
    loadChildren: () => import('./lazy-load/lazy-load.module')
                        .then(m => m.LazyLoadModule) 
  },
  {
    // if URL does not exist, it will be routed here
    path:"**",
    component:ErrorcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
