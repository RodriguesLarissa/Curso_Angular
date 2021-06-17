import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { of } from 'rxjs';


@Injectable()
export class AlimentosGuard implements CanActivateChild{

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('Guarda de rota filha');

        if(state.url.includes('editar')){
            alert('Usuário sem acesso!');
            return of(false);
        }

        return true;
    }

}