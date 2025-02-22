import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirationStateComponent } from './expiration-state.component';

describe('ExpirationStateComponent', () => {
  let component: ExpirationStateComponent;
  let fixture: ComponentFixture<ExpirationStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpirationStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpirationStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
