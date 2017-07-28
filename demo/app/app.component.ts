import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fade } from '../../src/index';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bounce', [transition('* => *', [useAnimation(bounce)])]),

    trigger('fadeOut', [transition('* => *', [useAnimation(fade)])]),
    trigger('fadeIn', [transition('* => *', [useAnimation(fade)])]),
  ],
})
export class AppComponent {
  bounce: boolean;

  fadeOut: boolean;
  fadeIn: boolean;

  animate(name: 'string') {
    this[name] = !this[name];
  }
}
