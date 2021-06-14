import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

    private cursos: string[] = ['HTML', 'Python', 'JavaScript']

    constructor(){
        console.log('CursosServices');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }

}