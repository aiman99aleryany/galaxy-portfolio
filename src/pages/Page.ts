import { equals } from 'ramda';
import Const from 'constants/Const';
import Fraction from './Fraction';

// pages
import Index from './index/Index';
import About from './about/About';
import Contact from './contact/Contact';
import Cv from './cv/Cv';
import Projects from './projects/Projects';
import Test from './test/Test';
import NotFound from './notFound/NotFound';

class Page {
  private lang: 'en' | 'ar';
  public index: Fraction;
  public about: Fraction;
  public contact: Fraction;
  public cv: Fraction;
  public projects: Fraction;
  public test: Fraction;
  public notFound: Fraction;
  public pagesAsArray: Fraction[];

  constructor(lang: 'en' | 'ar') {
    this.lang = lang;

    this.index = new Fraction(
      new Const().path.index,
      Index,
      new Const().translator.en.title.index,
      true
    );

    this.about = new Fraction(new Const().path.about, About, new Const().translator.en.title.about);

    this.contact = new Fraction(
      new Const().path.contact,
      Contact,
      new Const().translator.en.title.contact
    );

    this.cv = new Fraction(new Const().path.cv, Cv, new Const().translator.en.title.cv);

    this.projects = new Fraction(
      new Const().path.projects,
      Projects,
      new Const().translator.en.title.projects
    );

    this.test = new Fraction(new Const().path.test, Test, new Const().translator.en.title.test);

    this.notFound = new Fraction(
      new Const().path.notFound,
      NotFound,
      new Const().translator.en.title.notFound
    );

    if (equals(this.lang, 'ar')) this.setToAr();

    this.pagesAsArray = [
      this.index,
      this.about,
      this.contact,
      this.cv,
      this.projects,
      this.test,
      this.notFound,
    ];
  }

  setToAr() {
    this.index = new Fraction(
      new Const().path.index,
      Index,
      new Const().translator.ar.title.index,
      true
    );
    this.about = new Fraction(new Const().path.about, About, new Const().translator.ar.title.about);
    this.contact = new Fraction(
      new Const().path.contact,
      Contact,
      new Const().translator.ar.title.contact
    );
    this.cv = new Fraction(new Const().path.cv, Cv, new Const().translator.ar.title.cv);
    this.projects = new Fraction(
      new Const().path.projects,
      Projects,
      new Const().translator.ar.title.projects
    );
    this.test = new Fraction(new Const().path.test, Test, new Const().translator.ar.title.test);
    this.notFound = new Fraction(
      new Const().path.notFound,
      NotFound,
      new Const().translator.ar.title.notFound
    );
  }
}

export default Page;
