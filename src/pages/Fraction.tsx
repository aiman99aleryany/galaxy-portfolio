class Fraction {
  public index: boolean;
  public path: string;
  public element: any;
  public title: string;

  constructor(path: string, Element: any, title: string, index = false) {
    this.index = index;
    this.path = path;
    this.element = <Element />;
    this.title = title;
  }
}

export default Fraction;
