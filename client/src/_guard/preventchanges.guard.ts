import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditmemberComponent } from 'src/app/members/editmember/editmember.component';

@Injectable({
  providedIn: 'root'
})
export class PreventchangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: EditmemberComponent):  boolean {
      if(component.editForm.dirty){
        return confirm("Are You Sure you want to Leave ? Changes Will be lost!");
      }
    return true;
  }
  
}
