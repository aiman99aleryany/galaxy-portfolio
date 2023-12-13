import Path from './path/Path';
import Screen from './screen/Screen';
import Translator from './translator/Translator';

class Const {
  public readonly path: Path;
  public readonly screen: Screen;
  public readonly translator: Translator;

  constructor() {
    this.path = new Path();
    this.screen = new Screen();
    this.translator = new Translator();
  }
}

export default Const;
