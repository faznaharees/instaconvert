import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun17',
  templateUrl: './fun17.component.html',
  styleUrls: ['./fun17.component.scss'],
})
export class Fun17Component implements OnInit {
  select1='metricTon'
  select2='kilogram'
  range = 1
  result = 0.001
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
            switch(this.factor1) {
            case 1:{
              if(this.switchfn(this.select2,this.factor2)===1)
                this.result = this.range
                else if(this.switchfn(this.select2,this.factor2)===2)
                this.result =(this.range-32)*5/9
                else
                  this.result = (this.range-32)*5/9 + 273.15
                  break;
            }
            case 2:{
              if(this.switchfn(this.select2,this.factor2)===1)
                this.result = this.range*9/5 + 32
                else if(this.switchfn(this.select2,this.factor2)===2)
                this.result =this.range
                else
                  this.result = this.range+ 273.15
                  break;
            }
            case 3:{
              if(this.switchfn(this.select2,this.factor2)===1)
                this.result = (this.range-273.15)*9/5 + 32
                else if(this.switchfn(this.select2,this.factor2)===2)
                this.result =this.range-273.15
                else
                  this.result = this.range
                  break;
            }
            }                                                     
            
}

switchfn(select,factor){
  switch(select){
    case 'fahrenhiet':{factor = 1
                  break;}
    case 'celsius':{factor = 2
                    break;}
    case 'kelvin':{factor = 3
                      break;}
                                        
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
