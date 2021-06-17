import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlimentoFormComponent } from "../alimentos/alimento-form/alimento-form.component";

@Injectable()
export class AlimentosDeactivateGuard implements CanDeactivate<AlimentoFormComponent> {
       
        canDeactivate(
            component: AlimentoFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('Guarda de Desativação');

            return component.podeMudarRota();
    }
}
