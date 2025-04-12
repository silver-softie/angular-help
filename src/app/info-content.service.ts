import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoContentService {

  private helpData: { [key: string]: string } = {
    'button1': 'This button performs a specific action.',
    'inputName': 'Enter your full name in this field.',
    'divDescription': 'This div provides additional information.'
    // Add more help content here...
  };

  getHelpContent(key: string): string {
    return this.helpData[key] || 'No help available.';
  }
}
