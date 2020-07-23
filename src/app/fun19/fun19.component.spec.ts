import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core'
import { Fun19Component } from './fun19.component';

describe('Fun19Component', () => {
  let component: Fun19Component;
  let fixture: ComponentFixture<Fun19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fun19Component ],
      imports: [IonicModule.forRoot(),IonicModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(Fun19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
