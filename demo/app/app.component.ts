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
  flip,
  flipIn,
  flipOut,
  lightSpeedIn,
  lightSpeedOut,
  rotate,
  rotate3d,
  hinge,
  jackInTheBox,
  rollIn,
  rollOut,
  zoomIn,
  zoomIn3d,
  zoomOut,
  zoomOut3d,
} from '../../src/index';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('flash', [transition('* => *', useAnimation(flash))]),
    trigger('pulse', [transition('* => *', useAnimation(pulse))]),
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))]),
    trigger('shake', [transition('* => *', useAnimation(shake))]),
    trigger('swing', [transition('* => *', useAnimation(swing))]),
    trigger('tada', [transition('* => *', useAnimation(tada))]),
    trigger('wobble', [transition('* => *', useAnimation(wobble))]),
    trigger('jello', [transition('* => *', useAnimation(jello))]),

    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))]),
    trigger('bounceInRight', [
      transition('* => *', useAnimation(bounceInRight)),
    ]),
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),

    trigger('bounceOut', [transition('* => *', useAnimation(bounceOut))]),
    trigger('bounceOutDown', [
      transition('* => *', useAnimation(bounceOutDown)),
    ]),
    trigger('bounceOutLeft', [
      transition('* => *', useAnimation(bounceOutLeft)),
    ]),
    trigger('bounceOutRight', [
      transition('* => *', useAnimation(bounceOutRight)),
    ]),
    trigger('bounceOutUp', [transition('* => *', useAnimation(bounceOutUp))]),

    trigger('fadeIn', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { fromOpacity: 0, toOpacity: 1 },
        })
      ),
    ]),
    trigger('fadeInDown', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { fromOpacity: 0, toOpacity: 1, fromY: '-100%' },
        })
      ),
    ]),
    trigger('fadeInLeft', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { fromOpacity: 0, toOpacity: 1, fromX: '-100%' },
        })
      ),
    ]),
    trigger('fadeOut', [transition('* => *', useAnimation(fade3d))]),
    trigger('fadeOutUp', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { toY: '-100%' },
        })
      ),
    ]),
    trigger('fadeOutRight', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { toX: '100%' },
        })
      ),
    ]),

    trigger('slideInDown', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { toOpacity: 1, fromY: '-100%' },
        })
      ),
    ]),
    trigger('slideInLeft', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { toOpacity: 1, fromX: '-100%' },
        })
      ),
    ]),
    trigger('slideOutUp', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { toY: '-100%' },
        })
      ),
    ]),
    trigger('slideOutRight', [
      transition(
        '* => *',
        useAnimation(fade3d, {
          params: { toX: '100%' },
        })
      ),
    ]),

    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('flipInX', [transition('* => *', useAnimation(flipIn))]),
    trigger('flipInY', [
      transition(
        '* => *',
        useAnimation(flipIn, {
          params: { rotateX: 0, rotateY: 1 },
        })
      ),
    ]),
    trigger('flipOutX', [transition('* => *', useAnimation(flipOut))]),
    trigger('flipOutY', [
      transition(
        '* => *',
        useAnimation(flipOut, {
          params: { rotateX: 0, rotateY: 1 },
        })
      ),
    ]),

    trigger('lightSpeedIn', [transition('* => *', useAnimation(lightSpeedIn))]),
    trigger('lightSpeedOut', [
      transition('* => *', useAnimation(lightSpeedOut)),
    ]),

    trigger('rotateIn', [transition('* => *', useAnimation(rotate))]),
    trigger('rotateInDownLeft', [transition('* => *', useAnimation(rotate3d))]),
    trigger('rotateInDownRight', [
      transition(
        '* => *',
        useAnimation(rotate3d, {
          params: { direction: 'right', degrees: '45deg' },
        })
      ),
    ]),
    trigger('rotateInUpLeft', [
      transition(
        '* => *',
        useAnimation(rotate3d, {
          params: { degrees: '45deg' },
        })
      ),
    ]),
    trigger('rotateInUpRight', [
      transition(
        '* => *',
        useAnimation(rotate3d, {
          params: { direction: 'right', degrees: '-90deg' },
        })
      ),
    ]),
    trigger('rotateOut', [
      transition(
        '* => *',
        useAnimation(rotate, {
          params: {
            fromOpacity: 1,
            toOpacity: 0,
            degrees: '200deg',
          },
        })
      ),
    ]),
    trigger('rotateOutDownLeft', [
      transition(
        '* => *',
        useAnimation(rotate, {
          params: {
            fromOpacity: 1,
            toOpacity: 0,
            degrees: '45deg',
          },
        })
      ),
    ]),

    trigger('hinge', [transition('* => *', useAnimation(hinge))]),
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox))]),
    trigger('rollIn', [transition('* => *', useAnimation(rollIn))]),
    trigger('rollOut', [transition('* => *', useAnimation(rollOut))]),

    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
    trigger('zoomInLeft', [transition('* => *', useAnimation(zoomIn3d))]),
    trigger('zoomInDown', [
      transition(
        '* => *',
        useAnimation(zoomIn3d, {
          params: {
            fromOpacity: 0,
            toOpacity: 1,
            fromX: 0,
            fromY: '-1000px',
            toX: 0,
            toY: '60px',
          },
        })
      ),
    ]),
    trigger('zoomOut', [transition('* => *', useAnimation(zoomOut))]),
    trigger('zoomOutUp', [transition('* => *', useAnimation(zoomOut3d))]),
    trigger('zoomOutRight', [
      transition(
        '* => *',
        useAnimation(zoomOut3d, {
          params: { fromX: '-42px', fromY: 0, toX: '2000px', toY: 0 },
        })
      ),
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

  sliding = ['slideInDown', 'slideInLeft', 'slideOutUp', 'slideOutRight'];

  flippers = ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'];

  lightSpeed = ['lightSpeedIn', 'lightSpeedOut'];

  rotate = [
    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',
    'rotateOut',
    'rotateOutDownLeft',
  ];

  specials = ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'];

  zooming = [
    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomOut',
    'zoomOutUp',
    'zoomOutRight',
  ];

  animate(name: 'string') {
    this[name] = !this[name];
  }
}
