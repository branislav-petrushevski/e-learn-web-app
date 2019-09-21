import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCourseComponent } from './language-course.component';

describe('LanguageCourseComponent', () => {
  let component: LanguageCourseComponent;
  let fixture: ComponentFixture<LanguageCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
