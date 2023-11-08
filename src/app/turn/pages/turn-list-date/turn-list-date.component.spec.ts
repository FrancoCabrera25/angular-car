import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnListDateComponent } from './turn-list-date.component';

describe('TurnListDateComponent', () => {
  let component: TurnListDateComponent;
  let fixture: ComponentFixture<TurnListDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnListDateComponent]
    });
    fixture = TestBed.createComponent(TurnListDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
