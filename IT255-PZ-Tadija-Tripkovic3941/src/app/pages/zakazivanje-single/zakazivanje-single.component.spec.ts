import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakazivanjeSingleComponent } from './zakazivanje-single.component';

describe('ZakazivanjeSingleComponent', () => {
  let component: ZakazivanjeSingleComponent;
  let fixture: ComponentFixture<ZakazivanjeSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakazivanjeSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakazivanjeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
