import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceClaseComponent } from './enlace-clase.component';

describe('EnlaceClaseComponent', () => {
  let component: EnlaceClaseComponent;
  let fixture: ComponentFixture<EnlaceClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnlaceClaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnlaceClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
