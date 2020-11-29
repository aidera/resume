import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWordsComponent } from './last-words.component';

describe('LastWordsComponent', () => {
  let component: LastWordsComponent;
  let fixture: ComponentFixture<LastWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
