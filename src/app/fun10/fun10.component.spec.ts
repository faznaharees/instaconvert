import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fun10Component } from './fun10.component';

describe('Fun10Component', () => {
  let component: Fun10Component;
  let fixture: ComponentFixture<Fun10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun10Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
