import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioDetalhesComponent } from './cardapio-detalhes.component';

describe('CardapioDetalhesComponent', () => {
  let component: CardapioDetalhesComponent;
  let fixture: ComponentFixture<CardapioDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
