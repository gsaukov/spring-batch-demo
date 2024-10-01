import { Injectable } from '@angular/core'
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'

export const DEMO_DATE = new Date(Date.parse("2024-10-01T21:30:00+0100"))

export function isDemoTime(): boolean {
  return (new Date().getTime() - new Date(DEMO_DATE).getTime()) > 0
}

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (isDemoTime()) {
      return true
    } else {
      this.router.navigate(['/blocked'])
      return false
    }
  }

}
