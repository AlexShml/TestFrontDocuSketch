import { Component } from '@angular/core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  randomIcon: any;

  showRandomIcon() {
    const iconKeys = Object.keys(solidIcons);
    const randomIconKey = iconKeys[Math.floor(Math.random() * iconKeys.length)];
    this.randomIcon = solidIcons[randomIconKey as keyof typeof solidIcons];
  }
}
