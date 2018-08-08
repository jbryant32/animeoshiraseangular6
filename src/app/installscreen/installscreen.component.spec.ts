import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallscreenComponent } from './installscreen.component';

describe('InstallscreenComponent', () => {
  let component: InstallscreenComponent;
  let fixture: ComponentFixture<InstallscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
