import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun2Component } from './fun2.component';

describe('Fun2Component', () => {
  let component: Fun2Component;
  let fixture: ComponentFixture<Fun2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
