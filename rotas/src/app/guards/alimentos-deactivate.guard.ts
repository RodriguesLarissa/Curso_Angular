import { IFormCanDeactivate } from './iform-candeactivate';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlimentosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
       
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('Guarda de Desativação');

            //return component.podeMudarRota();

            return component.podeDesativar();
    }
}
