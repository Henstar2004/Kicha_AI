import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kichacontainer } from './kichacontainer';

describe('Kichacontainer', () => {
  let component: Kichacontainer;
  let fixture: ComponentFixture<Kichacontainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kichacontainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kichacontainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
