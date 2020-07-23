import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun5Component } from './fun5.component';

describe('Fun5Component', () => {
  let component: Fun5Component;
  let fixture: ComponentFixture<Fun5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
