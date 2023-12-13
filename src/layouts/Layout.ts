import { ElementType } from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

class Layout {
  public readonly Header: ElementType;
  public readonly Main: ElementType;
  public readonly Footer: ElementType;

  constructor() {
    this.Header = Header;
    this.Main = Main;
    this.Footer = Footer;
  }
}

export default Layout;
