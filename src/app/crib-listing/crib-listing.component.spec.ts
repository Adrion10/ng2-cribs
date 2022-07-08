import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CribListingComponent } from './crib-listing.component';

describe('CribListingComponent', () => {
  let component: CribListingComponent;
  let fixture: ComponentFixture<CribListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CribListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CribListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
