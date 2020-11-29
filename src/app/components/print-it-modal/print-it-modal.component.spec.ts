import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintItModalComponent } from './print-it-modal.component';

describe('PrintItModalComponent', () => {
  let component: PrintItModalComponent;
  let fixture: ComponentFixture<PrintItModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintItModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintItModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
