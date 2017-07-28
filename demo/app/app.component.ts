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
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fade3d,
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

    trigger('bounceIn', [transition('* => *', [useAnimation(bounceIn)])]),
    trigger('bounceInDown', [
      transition('* => *', [useAnimation(bounceInDown)]),
    ]),
    trigger('bounceInLeft', [
      transition('* => *', [useAnimation(bounceInLeft)]),
    ]),
    trigger('bounceInRight', [
      transition('* => *', [useAnimation(bounceInRight)]),
    ]),
    trigger('bounceInUp', [transition('* => *', [useAnimation(bounceInUp)])]),

    trigger('bounceOut', [transition('* => *', [useAnimation(bounceOut)])]),
    trigger('bounceOutDown', [
      transition('* => *', [useAnimation(bounceOutDown)]),
    ]),
    trigger('bounceOutLeft', [
      transition('* => *', [useAnimation(bounceOutLeft)]),
    ]),
    trigger('bounceOutRight', [
      transition('* => *', [useAnimation(bounceOutRight)]),
    ]),
    trigger('bounceOutUp', [transition('* => *', [useAnimation(bounceOutUp)])]),

    trigger('fadeIn', [
      transition('* => *', [
        useAnimation(fade3d, {
          params: { fromOpacity: 0, toOpacity: 1 },
        }),
      ]),
    ]),
    trigger('fadeInDown', [
      transition('* => *', [
        useAnimation(fade3d, {
          params: { fromOpacity: 0, toOpacity: 1, fromY: '-100%' },
        }),
      ]),
    ]),
    trigger('fadeInLeft', [
      transition('* => *', [
        useAnimation(fade3d, {
          params: { fromOpacity: 0, toOpacity: 1, fromX: '-100%' },
        }),
      ]),
    ]),
    trigger('fadeOut', [transition('* => *', [useAnimation(fade3d)])]),
    trigger('fadeOutUp', [
      transition('* => *', [
        useAnimation(fade3d, {
          params: { fromY: '100%' },
        }),
      ]),
    ]),
    trigger('fadeOutRight', [
      transition('* => *', [
        useAnimation(fade3d, {
          params: { fromX: '100%' },
        }),
      ]),
    ]),
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

  bounceEntrances = [
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',
  ];

  bounceExits = [
    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',
  ];

  fading = [
    'fadeIn',
    'fadeInDown',
    'fadeInLeft',
    'fadeOut',
    'fadeOutUp',
    'fadeOutRight',
  ];

  constructor() {
    this.attentionSeekers.forEach(name => (this[name] = false));
  }

  animate(name: 'string') {
    this[name] = !this[name];
  }
}
