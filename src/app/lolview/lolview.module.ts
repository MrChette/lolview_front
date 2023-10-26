import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Top10PageComponent } from './pages/top10-page/top10-page.component';
import { CardComponentComponent } from './components/card-component/card-component.component';



@NgModule({
  declarations: [
    Top10PageComponent,
    CardComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Top10PageComponent
  ]
})
export class LolviewModule { }
