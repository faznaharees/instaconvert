import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun7Component } from './fun7.component';

describe('Fun7Component', () => {
  let component: Fun7Component;
  let fixture: ComponentFixture<Fun7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun7Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
