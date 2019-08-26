import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadexamComponent } from './uploadexam.component';

describe('UploadexamComponent', () => {
  let component: UploadexamComponent;
  let fixture: ComponentFixture<UploadexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
