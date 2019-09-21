import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCourseListComponent } from './language-course-list.component';

describe('LanguageCourseListComponent', () => {
  let component: LanguageCourseListComponent;
  let fixture: ComponentFixture<LanguageCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
