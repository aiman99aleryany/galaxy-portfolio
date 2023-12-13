class Title {
  public readonly index: string;
  public readonly home: string;
  public readonly about: string;
  public readonly contact: string;
  public readonly cv: string;
  public readonly projects: string;
  public readonly test: string;
  public readonly notFound: string;

  constructor() {
    this.index = 'home';
    this.home = 'home';
    this.about = 'about';
    this.contact = 'contact';
    this.cv = 'cv';
    this.projects = 'projects';
    this.test = 'test';
    this.notFound = 'not found';
  }
}

export default Title;
