/* eslint-disable @typescript-eslint/lines-between-class-members */
class Config {
  public readonly localStorage: string;
  public readonly appName: 'Portfolio';
  public readonly appTag: '#portfolio';
  public readonly localStorageKey: string;
  public readonly defaultLang: 'en' | 'ar';

  constructor() {
    this.localStorage = '';
    this.appName = 'Portfolio';
    this.appTag = '#portfolio';
    this.localStorageKey = 'ZenPort';
    this.defaultLang = 'en';
  }
}

export default Config;
