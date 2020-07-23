import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun12Component } from './fun12.component';

describe('Fun12Component', () => {
  let component: Fun12Component;
  let fixture: ComponentFixture<Fun12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun12Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
