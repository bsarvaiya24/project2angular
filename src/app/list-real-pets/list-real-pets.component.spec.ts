import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRealPetsComponent } from './list-real-pets.component';

describe('ListRealPetsComponent', () => {
  let component: ListRealPetsComponent;
  let fixture: ComponentFixture<ListRealPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRealPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRealPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
