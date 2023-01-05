import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfiveComponent } from './newfive.component';

describe('NewfiveComponent', () => {
  let component: NewfiveComponent;
  let fixture: ComponentFixture<NewfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
