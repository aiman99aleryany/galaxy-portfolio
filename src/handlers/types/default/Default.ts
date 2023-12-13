class Default {
  public static log(fn: string, err: Error) {
    console.log(`[${fn}] function throws ${err.message}`);
  }
}

export default Default;
