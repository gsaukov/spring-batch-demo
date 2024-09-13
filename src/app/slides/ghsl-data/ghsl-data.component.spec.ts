import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhslDataComponent } from './ghsl-data.component';

describe('GhslDataComponent', () => {
  let component: GhslDataComponent;
  let fixture: ComponentFixture<GhslDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GhslDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhslDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
