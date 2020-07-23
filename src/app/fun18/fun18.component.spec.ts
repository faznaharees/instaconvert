import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun18Component } from './fun18.component';

describe('Fun18Component', () => {
  let component: Fun18Component;
  let fixture: ComponentFixture<Fun18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun18Component ],
      imports: [IonicModule.forRoot(),IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
