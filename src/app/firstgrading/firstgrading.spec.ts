import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstgrading } from './firstgrading';

describe('Firstgrading', () => {
  let component: Firstgrading;
  let fixture: ComponentFixture<Firstgrading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Firstgrading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Firstgrading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
