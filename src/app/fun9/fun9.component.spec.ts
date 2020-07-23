import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun9Component } from './fun9.component';

describe('Fun9Component', () => {
  let component: Fun9Component;
  let fixture: ComponentFixture<Fun9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun9Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
