import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesOfWorkComponent } from './places-of-work.component';

describe('PlacesOfWorkComponent', () => {
  let component: PlacesOfWorkComponent;
  let fixture: ComponentFixture<PlacesOfWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesOfWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
