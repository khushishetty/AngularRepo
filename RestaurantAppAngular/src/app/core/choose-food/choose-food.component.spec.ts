import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFoodComponent } from './choose-food.component';

describe('ChooseFoodComponent', () => {
  let component: ChooseFoodComponent;
  let fixture: ComponentFixture<ChooseFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
