import {Routes, RouterModule} from "@angular/router";
import {SynonymComponent} from "./components/synonym/synonym.component";
import {LanguageCheckComponent} from "./components/language-check/language-check.component";
import {NgModule} from "@angular/core";
import {StatisticComponent} from "./components/statistic/statistic.component";

const routes: Routes = [
  { path: 'synonyms', component: SynonymComponent, data: { title: 'Synonyms' } },
  { path: 'language-check', component: LanguageCheckComponent, data: { title: 'Repetitions' }  },
  { path: 'statistics', component: StatisticComponent, data: { title: 'Statistics' } },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
