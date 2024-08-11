import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicSetupComponent } from './classic-setup.component';

describe('ClassicSetupComponent', () => {
  let component: ClassicSetupComponent;
  let fixture: ComponentFixture<ClassicSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
