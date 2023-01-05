import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngReactiveFormComponent } from './ang-reactive-form.component';

describe('AngReactiveFormComponent', () => {
  let component: AngReactiveFormComponent;
  let fixture: ComponentFixture<AngReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
