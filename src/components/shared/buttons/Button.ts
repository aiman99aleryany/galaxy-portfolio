import { ElementType } from 'react';
import Regular from './regular/Regular';
import Swipe from './swipe/Swipe';

class Button {
  public readonly Regular: ElementType;
  public readonly Swipe: ElementType;

  constructor() {
    this.Regular = Regular;
    this.Swipe = Swipe;
  }
}

export default Button;
