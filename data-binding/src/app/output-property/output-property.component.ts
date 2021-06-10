import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  novoValor: number = 0;

  @ViewChild('campoInput') campoValorInput!: ElementRef;

  incrementa(){

    this.campoValorInput.nativeElement.value++; 
    this.mudouValor.emit({novoValor: this.valor});

  }

  decrementa(){

    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});

  }

  constructor() { }

  ngOnInit(): void {
  }

}