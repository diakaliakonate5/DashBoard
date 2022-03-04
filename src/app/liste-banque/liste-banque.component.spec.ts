import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBanqueComponent } from './liste-banque.component';

describe('ListeBanqueComponent', () => {
  let component: ListeBanqueComponent;
  let fixture: ComponentFixture<ListeBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBanqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
