import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDiplomaNumberInputComponent } from './student-diploma-number-input.component';

describe('StudentDiplomaNumberInputComponent', () => {
  let component: StudentDiplomaNumberInputComponent;
  let fixture: ComponentFixture<StudentDiplomaNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDiplomaNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDiplomaNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
