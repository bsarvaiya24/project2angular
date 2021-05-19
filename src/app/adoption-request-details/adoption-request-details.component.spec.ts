import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionRequestDetailsComponent } from './adoption-request-details.component';

describe('AdoptionRequestDetailsComponent', () => {
  let component: AdoptionRequestDetailsComponent;
  let fixture: ComponentFixture<AdoptionRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
