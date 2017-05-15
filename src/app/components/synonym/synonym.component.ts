import {Component, OnInit} from "@angular/core";
import {SynonymFinderService} from "./synonym-finder.service";

@Component({
  selector: 'app-synonym',
  templateUrl: './synonym.component.html',
  styleUrls: ['./synonym.component.css'],
  providers: [SynonymFinderService]
})
export class SynonymComponent {
  synonyms: String[];
  targetWord: String;
  language: String;
  noResults: boolean;

  constructor(private synonymFinderService: SynonymFinderService) {
  }

  getSynonyms(word: string, language: String): void {
    this.synonymFinderService
      .getSynonyms(word, language)
      .then(synonyms => {
          this.synonyms = synonyms;
          if (synonyms.length < 1) {
            this.noResults = true;
          } else {
            this.noResults = false;
          }
        }
      );
  }

}
