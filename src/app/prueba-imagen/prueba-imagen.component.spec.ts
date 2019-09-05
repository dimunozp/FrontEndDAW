import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaImagenComponent } from './prueba-imagen.component';

describe('PruebaImagenComponent', () => {
  let component: PruebaImagenComponent;
  let fixture: ComponentFixture<PruebaImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
