import Action from './action/Action';
import Text from './text/Text';
import Title from './title/Title';

class En {
  public readonly lang: 'en';
  public readonly dir: string;
  public readonly action: Action;
  public readonly text: Text;
  public readonly title: Title;

  constructor() {
    this.lang = 'en';
    this.dir = 'ltr';
    this.action = new Action();
    this.text = new Text();
    this.title = new Title();
  }
}

export default En;
