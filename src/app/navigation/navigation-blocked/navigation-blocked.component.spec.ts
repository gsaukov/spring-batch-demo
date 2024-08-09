import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NavigationBlockedComponent } from './navigation-blocked.component'

describe('NavigationBlockedComponent', () => {
  let component: NavigationBlockedComponent
  let fixture: ComponentFixture<NavigationBlockedComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBlockedComponent]
    })
    .compileComponents()
    
    fixture = TestBed.createComponent(NavigationBlockedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
