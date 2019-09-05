import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoRegistradoComponent } from './usuario-no-registrado.component';

describe('UsuarioNoRegistradoComponent', () => {
  let component: UsuarioNoRegistradoComponent;
  let fixture: ComponentFixture<UsuarioNoRegistradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNoRegistradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNoRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
