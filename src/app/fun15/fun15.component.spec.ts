import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun15Component } from './fun15.component';

describe('Fun15Component', () => {
  let component: Fun15Component;
  let fixture: ComponentFixture<Fun15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun15Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
