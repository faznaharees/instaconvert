import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun6Component } from './fun6.component';

describe('Fun6Component', () => {
  let component: Fun6Component;
  let fixture: ComponentFixture<Fun6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
