import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Realizar o curso de Angular',
    responsavel: {
      usuario: null
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
