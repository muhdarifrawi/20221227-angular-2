import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  
  obja={
    "valueone":"firstvalue",
    "valuetwo":"secondvalue",
    "valuethree":"thirdvalue"
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.obja
  }
}

