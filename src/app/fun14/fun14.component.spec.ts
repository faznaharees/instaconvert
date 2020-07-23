import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun14Component } from './fun14.component';

describe('Fun14Component', () => {
  let component: Fun14Component;
  let fixture: ComponentFixture<Fun14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun14Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
