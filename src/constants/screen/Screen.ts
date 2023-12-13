class Screen {
  public readonly mini: number;
  public readonly small: number;
  public readonly medium: number;
  public readonly large: number;
  public readonly xlarge: number;
  public readonly huge: number;

  constructor() {
    this.mini = 320;
    this.small = 481;
    this.medium = 641;
    this.large = 961;
    this.xlarge = 1025;
    this.huge = 1281;
  }
}

export default Screen;
