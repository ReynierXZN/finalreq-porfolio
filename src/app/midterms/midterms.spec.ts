import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Midterms } from './midterms';

describe('Midterms', () => {
  let component: Midterms;
  let fixture: ComponentFixture<Midterms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Midterms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Midterms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
