import Action from './action/Action';
import Text from './text/Text';
import Title from './title/Title';

class Ar {
  public readonly lang: 'ar';
  public readonly dir: string;
  public readonly action: Action;
  public readonly text: Text;
  public readonly title: Title;

  constructor() {
    this.lang = 'ar';
    this.dir = 'rtl';
    this.action = new Action();
    this.text = new Text();
    this.title = new Title();
  }
}

export default Ar;
