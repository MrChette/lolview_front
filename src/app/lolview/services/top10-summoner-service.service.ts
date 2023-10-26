import { EnvironmentInjector, Injectable } from '@angular/core';
import { enviroments } from 'src/environments/environments';
import { Top10Summoner } from '../interface/top10Summoner';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Top10SummonerServiceService {

  public baseUrl: string = enviroments.baseUrl;
  public _top10List: Top10Summoner[] = [];

  constructor( private http: HttpClient) {
    this.getTop10()
      .subscribe( resp => {
        console.log(resp);
        this._top10List = resp;
      })
  }



  getTop10(): Observable<Top10Summoner[]> {
    return this.http.get<Top10Summoner[]>(`${this.baseUrl}/listopten`)
  }
}
