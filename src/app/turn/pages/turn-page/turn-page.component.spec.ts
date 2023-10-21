import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnPageComponent } from './turn-page.component';

describe('TurnPageComponent', () => {
  let component: TurnPageComponent;
  let fixture: ComponentFixture<TurnPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnPageComponent]
    });
    fixture = TestBed.createComponent(TurnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
