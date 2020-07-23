import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun16Component } from './fun16.component';

describe('Fun16Component', () => {
  let component: Fun16Component;
  let fixture: ComponentFixture<Fun16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun16Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
