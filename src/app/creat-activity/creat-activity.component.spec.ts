import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatActivityComponent } from './creat-activity.component';

describe('CreatActivityComponent', () => {
  let component: CreatActivityComponent;
  let fixture: ComponentFixture<CreatActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatActivityComponent]
    });
    fixture = TestBed.createComponent(CreatActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
