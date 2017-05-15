import { Component, OnInit } from '@angular/core';
import {StatisticProviderService} from "./statistic-provider.service";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  polishChartLabels:string[] = [];
  polishChartData:number[] = [];
  englishChartLabels:string[] = [];
  englishChartData:number[] = [];
  pieChartType:string = 'pie';

  constructor(private statisticProviderService: StatisticProviderService) { }

  ngOnInit() {
    this.statisticProviderService.getStatistics().then(s => {
      this.polishChartLabels = Object.keys(s.polishSynonymSearches);
      for (var key in s.polishSynonymSearches) {
        var value = s.polishSynonymSearches[key];
        this.polishChartData.push(value)
      }

      this.englishChartLabels = Object.keys(s.englishSynonymSearches);
      for (var key in s.englishSynonymSearches) {
        var value = s.englishSynonymSearches[key];
        this.englishChartData.push(value)
      }

    });
  }
}
