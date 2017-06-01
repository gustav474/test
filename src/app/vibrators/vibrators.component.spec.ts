import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VibratorsComponent } from './vibrators.component';

describe('VibratorsComponent', () => {
  let component: VibratorsComponent;
  let fixture: ComponentFixture<VibratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VibratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
