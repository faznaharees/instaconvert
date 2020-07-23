import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun13Component } from './fun13.component';

describe('Fun13Component', () => {
  let component: Fun13Component;
  let fixture: ComponentFixture<Fun13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun13Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
