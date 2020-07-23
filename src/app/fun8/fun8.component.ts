import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun8',
  templateUrl: './fun8.component.html',
  styleUrls: ['./fun8.component.scss'],
})
export class Fun8Component implements OnInit {
  select1='Ampere'
  select2='Abampere'
  range = 1
  result = 10
  factor1 = 10
  factor2 = 1
 setQuantity1(value) {
   this.select1 = value;
   this.calculate(this.select1,this.select2);
   
 }
 setQuantity2(value) {
  this.select2 = value;
  this.calculate(this.select1,this.select2);
  
}
setQuantity3(value) {
  this.range = value;
  this.calculate(this.select1,this.select2);
  
}
setQuantity4(value) {
  this.result = value;
  this.calculate(this.select1,this.select2);
  
}
calculate(select1,select2){
            this.factor1 = this.switchfn(this.select1,this.factor1)                                                               
            this.factor2 = this.switchfn(this.select2,this.factor2)                                                               
            this.result = this.range*this.factor1/this.factor2
}

switchfn(select,factor){
  switch(select){
    case 'Abampere':{factor = 10
                  break;}
    case 'Ampere':{factor = 1
                    break;}
    case 'Biot':{factor = 10
                      break;}
    case 'Centiampere':{factor = 0.01
                      break;}
    case 'CoulombSecond':{factor = 1
                        break;} 
    case 'Emuofcurremt':{factor = 10
                          break;}
    case 'Esuofcurrent':{factor = 3.335641e-10
                            break;}
    case 'Franklinsecond':{factor = 3.335641e-10
                              break;}
    case 'Gaussian':{factor = 3.335641e-10
                                break;}  
    case 'Gigaampere':{factor = 1000000000
                                  break;}
    case 'Gilbert':{factor = 0.79577472
                                    break;}
   case 'Kiloampere':{factor = 1000
                                      break;}
     case 'Megaampere':{factor = 1000000
                         break;} 
     case 'Microampere':{factor = 0.000001
                          break;}   
   case 'Milliamp':{factor = 0.001
                            break;} 
  case 'Manoampere':{factor = 1e-9
                              break;} 
  case 'Picoampere':{factor = 1e-12
                               break;}   
   case 'Siemensvolt':{factor = 1
                                 break;}                          
  case 'Statampere':{factor = 3.335641e-10
                                  break;}                          
  case 'Teraampere':{factor = 1000000000000
                                    break;}                          
    case 'Voltohm':{factor = 1
                                      break;}                          
case 'Wattvolt':{factor = 1
                                        break;}                          
       case 'Weberhenry':{factor = 1
                                          break;}                          
        
                                                    
}return factor;    
}

  constructor() { }

  ngOnInit() {}

}
