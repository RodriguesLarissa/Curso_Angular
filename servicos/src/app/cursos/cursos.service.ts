import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter();
    static criouNovoCurso = new EventEmitter();

    private cursos: string[] = ['HTML', 'Python', 'JavaScript']
  static cursos: string[];

    constructor(){
        console.log('CursosServices');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }

}