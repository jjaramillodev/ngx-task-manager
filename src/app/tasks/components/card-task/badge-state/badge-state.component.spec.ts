import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeStateComponent } from './badge-state.component';

describe('BadgeComponent', () => {
  let component: BadgeStateComponent;
  let fixture: ComponentFixture<BadgeStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
