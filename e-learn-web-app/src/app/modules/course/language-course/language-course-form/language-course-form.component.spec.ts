import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCourseFormComponent } from './language-course-form.component';

describe('LanguageCourseFormComponent', () => {
  let component: LanguageCourseFormComponent;
  let fixture: ComponentFixture<LanguageCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
