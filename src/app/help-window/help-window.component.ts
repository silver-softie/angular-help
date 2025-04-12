// help-window.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-help-window',
  imports: [CommonModule],
  template: `
    <div class="help-window" *ngIf="infoText">
      {{ infoText }}
    </div>
  `,
  styles: [`
    .help-window {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: rgba(255, 255, 255, 0.9);
      border: 1px solid #ccc;
      padding: 10px;
      max-width: 300px;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  `],
})
export class HelpWindowComponent implements OnInit, OnDestroy {
  infoText: string = '';
  infoSubscription: Subscription | undefined;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoSubscription = this.infoService.infoText$.subscribe(text => {
      this.infoText = text;
    });
  }

  ngOnDestroy() {
    if (this.infoSubscription) {
      this.infoSubscription.unsubscribe();
    }
  }

}