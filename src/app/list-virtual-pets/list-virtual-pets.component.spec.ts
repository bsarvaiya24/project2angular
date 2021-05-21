import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVirtualPetsComponent } from './list-virtual-pets.component';

describe('ListVirtualPetsComponent', () => {
  let component: ListVirtualPetsComponent;
  let fixture: ComponentFixture<ListVirtualPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVirtualPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVirtualPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
