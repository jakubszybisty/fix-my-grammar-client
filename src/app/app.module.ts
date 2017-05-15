import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SynonymComponent } from './components/synonym/synonym.component';
import { LanguageCheckComponent } from './components/language-check/language-check.component';
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SynonymFinderService} from "./components/synonym/synonym-finder.service";
import {RepetitionCheckerService} from "./components/language-check/repetition-checker.service";
import {ValuesPipe} from "./pipes/values-pipe.pipe";
import { StatisticComponent } from './components/statistic/statistic.component';
import {ChartsModule} from "ng2-charts";
import {StatisticProviderService} from "./components/statistic/statistic-provider.service";

@NgModule({
  declarations: [
    AppComponent,
    SynonymComponent,
    LanguageCheckComponent,
    ValuesPipe,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  providers: [SynonymFinderService, RepetitionCheckerService, StatisticProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
