import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SviTerminiComponent } from './svi-termini.component';

describe('SviTerminiComponent', () => {
  let component: SviTerminiComponent;
  let fixture: ComponentFixture<SviTerminiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SviTerminiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SviTerminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
