import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathCourseFormComponent } from './math-course-form.component';

describe('MathCourseFormComponent', () => {
  let component: MathCourseFormComponent;
  let fixture: ComponentFixture<MathCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
