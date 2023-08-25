import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectToolbarComponent } from './proyect-toolbar.component';

describe('ProyectToolbarComponent', () => {
  let component: ProyectToolbarComponent;
  let fixture: ComponentFixture<ProyectToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectToolbarComponent]
    });
    fixture = TestBed.createComponent(ProyectToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
