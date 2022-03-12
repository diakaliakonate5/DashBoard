import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccepterComponent } from './list-accepter.component';

describe('ListAccepterComponent', () => {
  let component: ListAccepterComponent;
  let fixture: ComponentFixture<ListAccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccepterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
