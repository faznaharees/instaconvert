import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun6',
  templateUrl: './fun6.component.html',
  styleUrls: ['./fun6.component.scss'],
})
export class Fun6Component implements OnInit {
    select1='Hectre'
    select2='SquareKm'
    range = 1
    result = 0.01
    factor = 0.01
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

  calculate(range1,result1){
     switch(range1){
       case 'Hectre' :{   if(result1==='SquareM')
                                this.factor=10000
                             else if(result1==='SquareKm')
                             this.factor=0.01
                             else if(result1==='SquareMile')
                             this.factor=0.00386102
                             else if(result1==='Hectre')
                             this.factor=1
                             else if(result1==='SquareInch')
                             this.factor=15500000
                             else if(result1==='SquareFoot')
                             this.factor=107639
                             else if(result1==='SquareYard')
                             this.factor=11959.9
                             else if(result1==='Acre')
                             this.factor=2.47105
                        break;}
       case 'SquareM' :{   if(result1==='SquareM')
                        this.factor=1
                     else if(result1==='SquareKm')
                     this.factor=0.000001
                     else if(result1==='SquareMile')
                     this.factor=3.8610000
                     else if(result1==='Hectre')
                     this.factor=0.0001
                     else if(result1==='SquareInch')
                     this.factor=1550
                     else if(result1==='SquareFoot')
                     this.factor=10.7639
                     else if(result1==='SquareYard')
                     this.factor=1.19599
                     else if(result1==='Acre')
                     this.factor=0.000247105
                break;}
   case 'SquareKm' :{   if(result1==='SquareM')
                this.factor=100000
             else if(result1==='SquareKm')
             this.factor=1
             else if(result1==='SquareMile')
             this.factor=0.386102
             else if(result1==='Hectre')
             this.factor=100
             else if(result1==='SquareInch')
             this.factor=1550000000
             else if(result1==='SquareFoot')
             this.factor=10763900
             else if(result1==='SquareYard')
             this.factor=1195990
             else if(result1==='Acre')
             this.factor=247.105
        break;}
        case 'SquareInch' :{   if(result1==='SquareM')
        this.factor=0.00064516
     else if(result1==='SquareKm')
     this.factor=0.000000000645159587098
     else if(result1==='SquareMile')
     this.factor=0.00386102
     else if(result1==='Hectre')
     this.factor=0.00000064516
     else if(result1==='SquareInch')
     this.factor=1
     else if(result1==='SquareFoot')
     this.factor=0.00694444
     else if(result1==='SquareYard')
     this.factor=0.000771605
     else if(result1==='Acre')
     this.factor=0.00000015942
break;}
case 'SquareFoot' :{   if(result1==='SquareM')
this.factor=0.092903
else if(result1==='SquareKm')
this.factor=0.000000092903
else if(result1==='SquareMile')
this.factor=0.00000003587
else if(result1==='Hectre')
this.factor=0.0000092903
else if(result1==='SquareInch')
this.factor=144
else if(result1==='SquareFoot')
this.factor=0.00694444
else if(result1==='SquareYard')
this.factor=0.000771605
else if(result1==='Acre')
this.factor=0.00000015942
break;}
case 'Acre' :{   if(result1==='SquareM')
this.factor=4046.86
else if(result1==='SquareKm')
this.factor=0.00404686
else if(result1==='SquareMile')
this.factor=0.0015625
else if(result1==='Hectre')
this.factor=0.404686
else if(result1==='SquareInch')
this.factor=6273000
else if(result1==='SquareFoot')
this.factor=43560
else if(result1==='SquareYard')
this.factor=4840
else if(result1==='Acre')
this.factor=0.000206612
break;}
case 'SquareYard' :{   if(result1==='SquareM')
this.factor=0.836127
else if(result1==='SquareKm')
this.factor=0.00000083613
else if(result1==='SquareMile')
this.factor=0.00000032283
else if(result1==='Hectre')
this.factor=0.000083613
else if(result1==='SquareInch')
this.factor=1296
else if(result1==='SquareFoot')
this.factor=9
else if(result1==='SquareYard')
this.factor=0.1111111
else if(result1==='Acre')
this.factor=0.000022957
break;}

     default : console.log("default selected")}
     this.result = this.range*this.factor;
    }
  constructor() { }

  ngOnInit() {}

}
