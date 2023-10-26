import { Component } from '@angular/core';
import { Top10SummonerServiceService } from '../../services/top10-summoner-service.service';
import { Top10Summoner } from '../../interface/top10Summoner';

@Component({
  selector: 'app-top10-page',
  templateUrl: './top10-page.component.html',
  styleUrls: ['./top10-page.component.css']
})
export class Top10PageComponent {

  constructor(
    private top10SummonerService : Top10SummonerServiceService
  ) {}

  get getTop10(): Top10Summoner[] {
    return this.top10SummonerService._top10List;
  }

}
