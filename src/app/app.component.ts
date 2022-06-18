import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';

import {
    backInDown,
    backInLeft,
    backInRight,
    backInUp,
    backOutDown,
    backOutLeft,
    backOutRight,
    backOutUp,
    bounce,
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
    fadeInBottomLeft,
    fadeInBottomRight,
    fadeInDown,
    fadeInDownBig,
    fadeInLeft,
    fadeInLeftBig,
    fadeInRight,
    fadeInRightBig,
    fadeInTopLeft,
    fadeInTopRight,
    fadeInUp,
    fadeInUpBig,
    fadeOut,
    fadeOutBottomLeft,
    fadeOutBottomRight,
    fadeOutDown,
    fadeOutDownBig,
    fadeOutLeft,
    fadeOutLeftBig,
    fadeOutRight,
    fadeOutRightBig,
    fadeOutTopLeft,
    fadeOutTopRight,
    fadeOutUp,
    fadeOutUpBig,
    flash,
    flip,
    flipInX,
    flipInY,
    flipOutX,
    flipOutY,
    headShake,
    heartBeat,
    hinge,
    jackInTheBox,
    jello,
    lightSpeedInLeft,
    lightSpeedInRight,
    lightSpeedOutLeft,
    lightSpeedOutRight,
    pulse,
    rollIn,
    rollOut,
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
    rubberBand,
    shakeX,
    shakeY,
    slideInDown,
    slideInLeft,
    slideInRight,
    slideInUp,
    slideOutDown,
    slideOutLeft,
    slideOutRight,
    slideOutUp,
    swing,
    tada,
    wobble,
    zoomIn,
    zoomInDown,
    zoomInLeft,
    zoomInRight,
    zoomInUp,
    zoomOut,
    zoomOutDown,
    zoomOutLeft,
    zoomOutRight,
    zoomOutUp
} from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [trigger('tada', [transition('* => *', useAnimation(tada))])],
})
export class AppComponent {
  attentionSeekersAnimations = {
    bounce,
    flash,
    pulse,
    rubberBand,
    shakeX,
    shakeY,
    headShake,
    swing,
    tada,
    wobble,
    jello,
    heartBeat,
  };

  backEntrances = {
    backInDown,
    backInLeft,
    backInRight,
    backInUp,
  };

  backExits = {
    backOutDown,
    backOutLeft,
    backOutRight,
    backOutUp,
  };

  bouncingEntrances = {
    bounceIn,
    bounceInDown,
    bounceInLeft,
    bounceInRight,
    bounceInUp,
  };

  bouncingExits = {
    bounceOut,
    bounceOutDown,
    bounceOutLeft,
    bounceOutRight,
    bounceOutUp,
  };

  fadingEntrances = {
    fadeIn,
    fadeInDown,
    fadeInDownBig,
    fadeInLeft,
    fadeInLeftBig,
    fadeInRight,
    fadeInRightBig,
    fadeInUp,
    fadeInUpBig,
    fadeInTopLeft,
    fadeInTopRight,
    fadeInBottomLeft,
    fadeInBottomRight,
  };

  fadingExits = {
    fadeOut,
    fadeOutDown,
    fadeOutDownBig,
    fadeOutLeft,
    fadeOutLeftBig,
    fadeOutRight,
    fadeOutRightBig,
    fadeOutUp,
    fadeOutUpBig,
    fadeOutTopLeft,
    fadeOutTopRight,
    fadeOutBottomRight,
    fadeOutBottomLeft,
  };

  flippers = { flip, flipInX, flipInY, flipOutX, flipOutY };

  lightspeed = {
    lightSpeedInRight,
    lightSpeedInLeft,
    lightSpeedOutRight,
    lightSpeedOutLeft,
  };

  rotatingEntrances = {
    rotateIn,
    rotateInDownLeft,
    rotateInDownRight,
    rotateInUpLeft,
    rotateInUpRight,
  };

  rotatingExits = {
    rotateOut,
    rotateOutDownLeft,
    rotateOutDownRight,
    rotateOutUpLeft,
    rotateOutUpRight,
  };

  specials = {
    hinge,
    jackInTheBox,
    rollIn,
    rollOut,
  };

  zoomingEntrances = {
    zoomIn,
    zoomInDown,
    zoomInLeft,
    zoomInRight,
    zoomInUp,
  };

  zoomingExits = {
    zoomOut,
    zoomOutDown,
    zoomOutLeft,
    zoomOutRight,
    zoomOutUp,
  };

  slidingEntrances = {
    slideInDown,
    slideInLeft,
    slideInRight,
    slideInUp,
  };

  slidingExits = {
    slideOutDown,
    slideOutLeft,
    slideOutRight,
    slideOutUp,
  };

  // params

  animationTiming = 2;
  fromOpacity = 0;
  toOpacity = 1;
  degrees = 90;
  originX = 'center';
  originY = 'center';
}
