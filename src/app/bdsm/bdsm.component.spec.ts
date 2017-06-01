import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdsmComponent } from './bdsm.component';

describe('BdsmComponent', () => {
  let component: BdsmComponent;
  let fixture: ComponentFixture<BdsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
