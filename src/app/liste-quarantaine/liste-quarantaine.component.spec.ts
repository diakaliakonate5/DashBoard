import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeQuarantaineComponent } from './liste-quarantaine.component';

describe('ListeQuarantaineComponent', () => {
  let component: ListeQuarantaineComponent;
  let fixture: ComponentFixture<ListeQuarantaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeQuarantaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeQuarantaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
