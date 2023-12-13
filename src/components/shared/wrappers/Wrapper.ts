import { ElementType } from 'react';
import Div from './div/Div';
import Section from './section/Section';

class Wrapper {
  public Div: ElementType;
  public Section: ElementType;

  constructor() {
    this.Div = Div;
    this.Section = Section;
  }
}

export default Wrapper;
