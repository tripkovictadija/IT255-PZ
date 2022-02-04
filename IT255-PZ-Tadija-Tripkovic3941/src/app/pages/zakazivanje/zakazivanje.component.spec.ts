import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakazivanjeComponent } from './zakazivanje.component';

describe('ZakazivanjeComponent', () => {
  let component: ZakazivanjeComponent;
  let fixture: ComponentFixture<ZakazivanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakazivanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakazivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
