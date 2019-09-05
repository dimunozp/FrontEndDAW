import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisObjetosComponent } from './mis-objetos.component';

describe('MisObjetosComponent', () => {
  let component: MisObjetosComponent;
  let fixture: ComponentFixture<MisObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
