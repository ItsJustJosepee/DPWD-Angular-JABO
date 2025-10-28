import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padre3Component } from './padre3.component';

describe('Padre3Component', () => {
  let component: Padre3Component;
  let fixture: ComponentFixture<Padre3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Padre3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Padre3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
