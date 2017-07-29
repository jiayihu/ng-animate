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
  fadeIn,
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeOut,
  fadeOutDown,
  fadeOutUp,
  fadeOutLeft,
  fadeOutRight,
  slideInDown,
  slideInUp,
  slideInLeft,
  slideInRight,
  slideOutDown,
  slideOutUp,
  slideOutLeft,
  slideOutRight,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  lightSpeedIn,
  lightSpeedOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  hinge,
  jackInTheBox,
  rollIn,
  rollOut,
  zoomIn,
  zoomInDown,
  zoomInUp,
  zoomInLeft,
  zoomInRight,
  zoomOut,
  zoomOutDown,
  zoomOutUp,
  zoomOutLeft,
  zoomOutRight,
} from '../../lib/index';

@Component({
  selector: 'demo-app',
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
    trigger('bounceOut', [transition('* => *', useAnimation(bounceOut))]),
    trigger('bounceOutRight', [
      transition('* => *', useAnimation(bounceOutRight)),
    ]),
    trigger('bounceOutUp', [transition('* => *', useAnimation(bounceOutUp))]),

    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))]),
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))]),
    trigger('fadeOut', [transition('* => *', useAnimation(fadeOut))]),
    trigger('fadeOutUp', [transition('* => *', useAnimation(fadeOutUp))]),
    trigger('fadeOutRight', [transition('* => *', useAnimation(fadeOutRight))]),

    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))]),
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))]),
    trigger('slideOutUp', [transition('* => *', useAnimation(slideOutUp))]),
    trigger('slideOutRight', [
      transition('* => *', useAnimation(slideOutRight)),
    ]),

    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('flipInX', [transition('* => *', useAnimation(flipInX))]),
    trigger('flipInY', [transition('* => *', useAnimation(flipInY))]),
    trigger('flipOutX', [transition('* => *', useAnimation(flipOutX))]),
    trigger('flipOutY', [transition('* => *', useAnimation(flipOutY))]),

    trigger('lightSpeedIn', [transition('* => *', useAnimation(lightSpeedIn))]),
    trigger('lightSpeedOut', [
      transition('* => *', useAnimation(lightSpeedOut)),
    ]),

    trigger('rotateIn', [transition('* => *', useAnimation(rotateIn))]),
    trigger('rotateInDownLeft', [
      transition('* => *', useAnimation(rotateInDownLeft)),
    ]),
    trigger('rotateInUpRight', [
      transition('* => *', useAnimation(rotateInUpRight)),
    ]),
    trigger('rotateOut', [transition('* => *', useAnimation(rotateOut))]),
    trigger('rotateOutUpLeft', [
      transition('* => *', useAnimation(rotateOutUpLeft)),
    ]),
    trigger('rotateOutDownRight', [
      transition('* => *', useAnimation(rotateOutDownRight)),
    ]),

    trigger('hinge', [transition('* => *', useAnimation(hinge))]),
    trigger('jackInTheBox', [transition('* => *', useAnimation(jackInTheBox))]),
    trigger('rollIn', [transition('* => *', useAnimation(rollIn))]),
    trigger('rollOut', [transition('* => *', useAnimation(rollOut))]),

    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
    trigger('zoomInLeft', [transition('* => *', useAnimation(zoomInLeft))]),
    trigger('zoomInDown', [transition('* => *', useAnimation(zoomInDown))]),
    trigger('zoomOut', [transition('* => *', useAnimation(zoomOut))]),
    trigger('zoomOutUp', [transition('* => *', useAnimation(zoomOutUp))]),
    trigger('zoomOutRight', [transition('* => *', useAnimation(zoomOutRight))]),
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

  bouncing = [
    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceOut',
    'bounceOutUp',
    'bounceOutRight',
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
    'rotateInUpRight',
    'rotateOut',
    'rotateOutUpLeft',
    'rotateOutDownRight',
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
