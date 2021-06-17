import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNaoEncotradaComponent } from './pagina-nao-encotrada.component';

describe('PaginaNaoEncotradaComponent', () => {
  let component: PaginaNaoEncotradaComponent;
  let fixture: ComponentFixture<PaginaNaoEncotradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNaoEncotradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNaoEncotradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
