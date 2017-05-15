import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SynonymFinderService {

  constructor(private http: Http) {}

  getSynonyms(word: string, language:String): Promise<String[]> {
    return this.http
      .get('http://localhost:8080/api/v1/synonyms/' + language, { params: {word: word}})
      .toPromise()
      .then(response => response.json());
  }
}
