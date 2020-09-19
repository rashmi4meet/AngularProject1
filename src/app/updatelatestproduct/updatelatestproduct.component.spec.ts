import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelatestproductComponent } from './updatelatestproduct.component';

describe('UpdatelatestproductComponent', () => {
  let component: UpdatelatestproductComponent;
  let fixture: ComponentFixture<UpdatelatestproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelatestproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelatestproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
