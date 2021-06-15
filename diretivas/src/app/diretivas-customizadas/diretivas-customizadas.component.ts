import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  color: string = '';

  cursosProg: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(){
    this.cursosProg = !this.cursosProg;
  }

  selectColor(color: string){
    this.color = color;
  }

  pickColor(){
    return this.color;
  }
}
