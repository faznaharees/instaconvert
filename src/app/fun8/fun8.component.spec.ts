import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun8Component } from './fun8.component';

describe('Fun8Component', () => {
  let component: Fun8Component;
  let fixture: ComponentFixture<Fun8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun8Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
