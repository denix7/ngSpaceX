import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestLaunchComponentComponent } from './latest-launch-component.component';

describe('LatestLaunchComponentComponent', () => {
  let component: LatestLaunchComponentComponent;
  let fixture: ComponentFixture<LatestLaunchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestLaunchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestLaunchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
