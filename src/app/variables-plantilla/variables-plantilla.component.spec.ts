import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesPlantillaComponent } from './variables-plantilla.component';

describe('VariablesPlantillaComponent', () => {
  let component: VariablesPlantillaComponent;
  let fixture: ComponentFixture<VariablesPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariablesPlantillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VariablesPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
