import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";
import { ActivateCheckService } from "./activate-check.service";

@Injectable({
  providedIn: "root"
})
export class ActivateGuard implements CanActivate {
  constructor(
    private _activateCheck: ActivateCheckService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._activateCheck.appInstalled()) {
      this.router.navigate(["install"]);
      return of(false);
    } else {
      return of(true);
    }
  }
}
