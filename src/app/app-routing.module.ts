import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {Fun1Component} from './fun1/fun1.component'
import {Fun2Component} from './fun2/fun2.component'
import {Fun3Component} from './fun3/fun3.component'
import {Fun4Component} from './fun4/fun4.component'
import {Fun5Component} from './fun5/fun5.component'
import {Fun6Component} from './fun6/fun6.component'
import {Fun7Component} from './fun7/fun7.component'
import {Fun8Component} from './fun8/fun8.component'
import {Fun9Component} from './fun9/fun9.component'
import {Fun10Component} from './fun10/fun10.component'
import {Fun11Component} from './fun11/fun11.component'
import {Fun12Component} from './fun12/fun12.component'
import {Fun13Component} from './fun13/fun13.component'
import {Fun14Component} from './fun14/fun14.component'
import {Fun15Component} from './fun15/fun15.component'
import {Fun16Component} from './fun16/fun16.component'
import {Fun17Component} from './fun17/fun17.component'
import {Fun18Component} from './fun18/fun18.component'
import {Fun19Component} from './fun19/fun19.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path:'1',component:Fun1Component
  },{path:'2',component:Fun2Component },
  {path:'3',component:Fun3Component },
  {path:'4',component:Fun4Component },
  {path:'5',component:Fun5Component },
  {path:'6',component:Fun6Component },
  {path:'7',component:Fun7Component },
  {path:'8',component:Fun8Component },
  {path:'9',component:Fun9Component },
  {path:'10',component:Fun10Component },
  {path:'11',component:Fun11Component },
  {path:'12',component:Fun12Component },
  {path:'13',component:Fun13Component },
  {path:'14',component:Fun14Component },
  {path:'15',component:Fun15Component },
  {path:'16',component:Fun16Component },
  {path:'17',component:Fun17Component },

  {path:'18',component:Fun18Component },
  {path:'19',component:Fun19Component }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
