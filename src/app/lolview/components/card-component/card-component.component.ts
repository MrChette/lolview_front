import { Component, Input } from '@angular/core';
import { Top10Summoner } from '../../interface/top10Summoner';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {

  @Input()
  public top10Summoner!: Top10Summoner;


  ngOnInit(): void {
    if( !this.top10Summoner ) throw Error('Error - MenuComponentComponent')
  }

}
