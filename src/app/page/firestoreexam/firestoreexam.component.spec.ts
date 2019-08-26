import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreexamComponent } from './firestoreexam.component';

describe('FirestoreexamComponent', () => {
  let component: FirestoreexamComponent;
  let fixture: ComponentFixture<FirestoreexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirestoreexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoreexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
