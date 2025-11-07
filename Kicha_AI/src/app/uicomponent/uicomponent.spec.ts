import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uicomponent } from './uicomponent';

describe('Uicomponent', () => {
  let component: Uicomponent;
  let fixture: ComponentFixture<Uicomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uicomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uicomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
