import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoDetalheComponent } from './alimento-detalhe.component';

describe('AlimentoDetalheComponent', () => {
  let component: AlimentoDetalheComponent;
  let fixture: ComponentFixture<AlimentoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentoDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
