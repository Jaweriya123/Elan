import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionUnstichedComponent } from './colection-unstiched.component';

describe('ColectionUnstichedComponent', () => {
  let component: ColectionUnstichedComponent;
  let fixture: ComponentFixture<ColectionUnstichedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColectionUnstichedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectionUnstichedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
