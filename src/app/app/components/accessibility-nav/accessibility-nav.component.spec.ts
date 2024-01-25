import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityNavComponent } from './accessibility-nav.component';

describe('AccessibilityNavComponent', () => {
  let component: AccessibilityNavComponent;
  let fixture: ComponentFixture<AccessibilityNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessibilityNavComponent]
    });
    fixture = TestBed.createComponent(AccessibilityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
