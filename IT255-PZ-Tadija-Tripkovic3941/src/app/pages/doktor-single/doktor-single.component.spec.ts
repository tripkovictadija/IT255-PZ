import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoktorSingleComponent } from './doktor-single.component';

describe('DoktorSingleComponent', () => {
  let component: DoktorSingleComponent;
  let fixture: ComponentFixture<DoktorSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoktorSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoktorSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
