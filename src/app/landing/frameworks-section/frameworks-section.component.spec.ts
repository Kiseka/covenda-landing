import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksSectionComponent } from './frameworks-section.component';

describe('FrameworksSectionComponent', () => {
  let component: FrameworksSectionComponent;
  let fixture: ComponentFixture<FrameworksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworksSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameworksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
