import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdButton } from './amd-button';

describe('AmdButton', () => {
  let component: AmdButton;
  let fixture: ComponentFixture<AmdButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmdButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AmdButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
