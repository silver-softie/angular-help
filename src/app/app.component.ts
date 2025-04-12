import { Component } from '@angular/core';
import { HelpWindowComponent } from './help-window/help-window.component';
import { InfoDirective } from './info.directive';

@Component({
  selector: 'app-root',
  imports: [HelpWindowComponent, InfoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'help-test';
  currentHelpText: string = '';

  showHelp(text: string) {
    console.log(text);
    this.currentHelpText = text;
  }

  clearHelp() {
    this.currentHelpText = '';
  }
}
