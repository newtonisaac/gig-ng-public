import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeStatusComponent } from './code-status.component';

describe('CodeStatusComponent', () => {
  let component: CodeStatusComponent;
  let fixture: ComponentFixture<CodeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
