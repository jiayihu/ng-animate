import { AnimationBuilder, AnimationMetadata, AnimationPlayer } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-box',
  templateUrl: './example-box.component.html',
  styleUrls: ['./example-box.component.css'],
})
export class ExampleBoxComponent {
  @Input() label: string;

  @Input() animations: { [name: string]: AnimationMetadata } = {};

  @Input() params: {
    [name: string]: unknown;
  } = {};

  lastAnimPlayer?: AnimationPlayer;

  constructor(private readonly animationBuilder: AnimationBuilder) {}

  playAnim(
    element: HTMLElement,
    anim: AnimationMetadata | AnimationMetadata[]
  ): void {
    this.lastAnimPlayer?.finish();

    const animPlayer = this.animationBuilder
      .build(anim)
      .create(element, { params: this.params });

    animPlayer.init();
    animPlayer.onDone(() => {
      animPlayer.destroy();
      if (animPlayer === this.lastAnimPlayer) {
        this.lastAnimPlayer = undefined;
      }
    });
    this.lastAnimPlayer = animPlayer;
    animPlayer.play();
  }
}
