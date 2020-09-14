import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestproductdashboardComponent } from './latestproductdashboard.component';

describe('LatestproductdashboardComponent', () => {
  let component: LatestproductdashboardComponent;
  let fixture: ComponentFixture<LatestproductdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestproductdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestproductdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
