import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNavComponent } from './shared-nav.component';

describe('SharedNavComponent', () => {
  let component: SharedNavComponent;
  let fixture: ComponentFixture<SharedNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
