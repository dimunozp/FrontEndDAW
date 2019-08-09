import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarObjetoPerdidoComponent } from './registrar-objeto-perdido.component';

describe('RegistrarObjetoPerdidoComponent', () => {
  let component: RegistrarObjetoPerdidoComponent;
  let fixture: ComponentFixture<RegistrarObjetoPerdidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarObjetoPerdidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarObjetoPerdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
