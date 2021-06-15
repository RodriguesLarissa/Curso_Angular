import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioNaoEncontradoComponent } from './cardapio-nao-encontrado.component';

describe('CardapioNaoEncontradoComponent', () => {
  let component: CardapioNaoEncontradoComponent;
  let fixture: ComponentFixture<CardapioNaoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioNaoEncontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
