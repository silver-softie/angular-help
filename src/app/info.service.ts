import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private infoText = new BehaviorSubject<string>('');
  infoText$ = this.infoText.asObservable();

  // TODO: rather than having the help content being part of the template it would be better
  // if the string passed here was a key to another data store, e.g. a JSON file.

  setInfoText(text: string) {
    console.log(text);
    this.infoText.next(text);
  }

  clearInfoText() {
    this.infoText.next('');
  }
}
