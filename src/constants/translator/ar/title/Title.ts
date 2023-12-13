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
    this.index = 'الرئيسية';
    this.home = 'الرئيسية';
    this.about = 'عني';
    this.contact = 'اتصل بي';
    this.cv = 'السي في';
    this.projects = 'المشاريع';
    this.test = 'اختبار';
    this.notFound = 'الصفحة غير موجودة';
  }
}

export default Title;
