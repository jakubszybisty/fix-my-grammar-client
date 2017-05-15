import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Statistic} from "./statistic";

@Injectable()
export class StatisticProviderService {

  constructor(private http: Http) {}

  getStatistics(): Promise<any> {
    return this.http
      .get('http://localhost:8080/api/v1/synonyms/statistics')
      .toPromise()
      .then(response => response.json());
  }



}
