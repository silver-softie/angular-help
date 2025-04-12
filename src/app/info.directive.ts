import { Directive, Input, HostListener } from '@angular/core';
import { InfoService } from './info.service';
import { InfoContentService } from './info-content.service';
@Directive({
  selector: '[appInfo]'
})
export class InfoDirective {

  @Input('appInfo') infoKey: string = '';

  constructor(private infoService: InfoService, private infoContentService: InfoContentService) { }

  @HostListener('mouseover') onMouseOver() {
    const helpText = this.infoContentService.getHelpContent(this.infoKey);
    this.infoService.setInfoText(helpText);
  }

  @HostListener('mouseout') onMouseOut() {
    this.infoService.clearInfoText();
  }

}
