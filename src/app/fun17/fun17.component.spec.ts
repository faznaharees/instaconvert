import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun17Component } from './fun17.component';

describe('Fun17Component', () => {
  let component: Fun17Component;
  let fixture: ComponentFixture<Fun17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun17Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
