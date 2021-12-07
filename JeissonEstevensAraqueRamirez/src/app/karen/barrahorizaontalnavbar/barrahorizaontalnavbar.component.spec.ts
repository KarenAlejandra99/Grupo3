import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrahorizaontalnavbarComponent } from './barrahorizaontalnavbar.component';

describe('BarrahorizaontalnavbarComponent', () => {
  let component: BarrahorizaontalnavbarComponent;
  let fixture: ComponentFixture<BarrahorizaontalnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrahorizaontalnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrahorizaontalnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
