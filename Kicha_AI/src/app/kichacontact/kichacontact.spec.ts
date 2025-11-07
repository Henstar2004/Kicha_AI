import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kichacontact } from './kichacontact';

describe('Kichacontact', () => {
  let component: Kichacontact;
  let fixture: ComponentFixture<Kichacontact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kichacontact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kichacontact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
