import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCasesComponent } from './use-cases.component';

describe('UseCasesComponent', () => {
  let component: UseCasesComponent;
  let fixture: ComponentFixture<UseCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseCasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
