import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnListClientComponent } from './turn-list-client.component';

describe('TurnListClientComponent', () => {
  let component: TurnListClientComponent;
  let fixture: ComponentFixture<TurnListClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnListClientComponent]
    });
    fixture = TestBed.createComponent(TurnListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
