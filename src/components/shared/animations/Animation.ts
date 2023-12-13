import { ElementType } from 'react';
import Stars from './stars/Stars';
import Background from './background/Background';

class Animation {
  public readonly Background: ElementType;
  public readonly Stars: ElementType;

  constructor() {
    this.Background = Background;
    this.Stars = Stars;
  }
}

export default Animation;
