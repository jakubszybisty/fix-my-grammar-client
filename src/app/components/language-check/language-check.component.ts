import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {RepetitionCheckerService} from "./repetition-checker.service";
import {isEmpty} from "rxjs/operator/isEmpty";

@Component({
  selector: 'app-language-check',
  templateUrl: './language-check.component.html',
  styleUrls: ['./language-check.component.css']
})
export class LanguageCheckComponent implements OnInit {

  text: String;
  repetitions: any;
  noResults: boolean;

  constructor(private repetitionCheckerService: RepetitionCheckerService) { }

  ngOnInit() {
  }

  checkForRepetitions(text: String): void {
    this.repetitionCheckerService
      .checkForRepetitions(text)
      .then(reps => {
          console.log('xd');
          console.log(reps.repetitionEntries);
          this.repetitions = reps.repetitionEntries;
          if(this.isEmpty(reps)) {
            this.noResults = true;
          } else {
            this.noResults = false;
          }
        }
      );
  }

  isEmpty(map): boolean {
  for(var key in map) {
    return !map.hasOwnProperty(key);
  }
  return true;
}

}
