import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathCourseListComponent } from './math-course-list.component';

describe('MathCourseListComponent', () => {
  let component: MathCourseListComponent;
  let fixture: ComponentFixture<MathCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
