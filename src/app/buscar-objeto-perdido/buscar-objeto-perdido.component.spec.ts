import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarObjetoPerdidoComponent } from './buscar-objeto-perdido.component';

describe('BuscarObjetoPerdidoComponent', () => {
  let component: BuscarObjetoPerdidoComponent;
  let fixture: ComponentFixture<BuscarObjetoPerdidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarObjetoPerdidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarObjetoPerdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
