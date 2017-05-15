import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class RepetitionCheckerService {

  constructor(private http: Http) {}

  checkForRepetitions(text: String): Promise<any> {
    return this.http
      .get('http://localhost:8080/api/v1/repetitions', { params: {text: text}})
      .toPromise()
      .then(response => response.json());
  }

}
