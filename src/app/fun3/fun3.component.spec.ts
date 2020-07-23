import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun3Component } from './fun3.component';

describe('Fun3Component', () => {
  let component: Fun3Component;
  let fixture: ComponentFixture<Fun3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
