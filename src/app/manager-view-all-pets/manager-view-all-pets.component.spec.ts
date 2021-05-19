import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewAllPetsComponent } from './manager-view-all-pets.component';

describe('ManagerViewAllPetsComponent', () => {
  let component: ManagerViewAllPetsComponent;
  let fixture: ComponentFixture<ManagerViewAllPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerViewAllPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewAllPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
