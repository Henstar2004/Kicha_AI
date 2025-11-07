import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kichahome } from './kichahome';

describe('Kichahome', () => {
  let component: Kichahome;
  let fixture: ComponentFixture<Kichahome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kichahome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kichahome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
