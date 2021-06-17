import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Alimento } from "../alimento";
import { AlimentoService } from "../alimento.service";

@Injectable()
export class AlimentoDetalheResolver implements Resolve<Alimento> {

    constructor(private alimentoService: AlimentoService) {}
     
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            
            console.log('AlimentoDetalheResolver')

            let id = route.params['id'];

            return this.alimentoService.getAlimento(id);

        }
}
