import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import {
  bounce,
  flash,
  pulse,
  rubberBand,
  shake,
  swing,
  tada,
  wobble,
  jello,
  fade,
} from '../../src/index';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bounce', [transition('* => *', [useAnimation(bounce)])]),
    trigger('flash', [transition('* => *', [useAnimation(flash)])]),
    trigger('pulse', [transition('* => *', [useAnimation(pulse)])]),
    trigger('rubberBand', [transition('* => *', [useAnimation(rubberBand)])]),
    trigger('shake', [transition('* => *', [useAnimation(shake)])]),
    trigger('swing', [transition('* => *', [useAnimation(swing)])]),
    trigger('tada', [transition('* => *', [useAnimation(tada)])]),
    trigger('wobble', [transition('* => *', [useAnimation(wobble)])]),
    trigger('jello', [transition('* => *', [useAnimation(jello)])]),

    trigger('fadeOut', [transition('* => *', [useAnimation(fade)])]),
    trigger('fadeIn', [transition('* => *', [useAnimation(fade)])]),
  ],
})
export class AppComponent {
  attentionSeekers = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'swing',
    'tada',
    'wobble',
    'jello',
  ];

  fadeOut: boolean;
  fadeIn: boolean;

  constructor() {
    this.attentionSeekers.forEach(name => (this[name] = false));
  }

  animate(name: 'string') {
    this[name] = !this[name];
  }
}
