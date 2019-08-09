import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDetalladaComponent } from './informacion-detallada.component';

describe('InformacionDetalladaComponent', () => {
  let component: InformacionDetalladaComponent;
  let fixture: ComponentFixture<InformacionDetalladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionDetalladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
