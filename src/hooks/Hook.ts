import useScroll from './scroll/useScroll';
import useTitle from './title/useTitle';
import useWindow from './window/useWindow';

class Hook {
  private useTitle: (...args: any) => any;
  private useWindow: (...args: any) => any;
  private useScroll: (...args: any) => any;

  constructor() {
    this.useTitle = useTitle;
    this.useWindow = useWindow;
    this.useScroll = useScroll;
  }

  public applyTitles() {
    this.useTitle();
  }

  public getWindow() {
    return this.useWindow();
  }

  public applyScrolling() {
    this.useScroll();
  }
}

export default Hook;
