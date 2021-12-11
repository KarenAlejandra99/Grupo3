import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeissonAraqueComponent } from './jeisson-araque.component';

describe('JeissonAraqueComponent', () => {
  let component: JeissonAraqueComponent;
  let fixture: ComponentFixture<JeissonAraqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeissonAraqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeissonAraqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
