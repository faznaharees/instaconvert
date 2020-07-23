import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun4Component } from './fun4.component';

describe('Fun4Component', () => {
  let component: Fun4Component;
  let fixture: ComponentFixture<Fun4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
