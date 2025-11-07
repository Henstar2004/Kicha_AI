import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kichaai } from './kichaai';

describe('Kichaai', () => {
  let component: Kichaai;
  let fixture: ComponentFixture<Kichaai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kichaai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kichaai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
