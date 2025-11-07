import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kichasettings } from './kichasettings';

describe('Kichasettings', () => {
  let component: Kichasettings;
  let fixture: ComponentFixture<Kichasettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kichasettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kichasettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
