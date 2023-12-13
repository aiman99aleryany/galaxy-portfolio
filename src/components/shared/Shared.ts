import Wrapper from './wrappers/Wrapper';
import Button from './buttons/Button';
import Input from './inputs/Input';
import Animation from './animations/Animation';

class Shared {
  public readonly wrapper: Wrapper;
  public readonly button: Button;
  public readonly input: Input;
  public readonly animation: Animation;

  constructor() {
    this.wrapper = new Wrapper();
    this.button = new Button();
    this.input = new Input();
    this.animation = new Animation();
  }
}

export default Shared;
