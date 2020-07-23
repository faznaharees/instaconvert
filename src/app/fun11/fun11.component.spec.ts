import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun11Component } from './fun11.component';

describe('Fun11Component', () => {
  let component: Fun11Component;
  let fixture: ComponentFixture<Fun11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun11Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
