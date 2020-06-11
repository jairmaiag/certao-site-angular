import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralDireitoComponent } from './lateral-direito.component';

describe('LateralDireitoComponent', () => {
  let component: LateralDireitoComponent;
  let fixture: ComponentFixture<LateralDireitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralDireitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
