import Str from 'lib/str/Str';

class Imm {
  public static copy<Type>(obj: Type): Type {
    return new Str(new Str(obj).getStringified()).getParsed();
  }

  public static insert<Type extends { ks: any }>(obj: Type, ks: any): Type {
    return { ...Imm.copy(obj), ...Imm.copy(ks) };
  }

  public static insertElement<Type>(arr: Type[], ele: any): Type[] {
    return [...(Imm.copy<Type[]>(arr) as []), Imm.copy<Type>(ele)];
  }

  public static insertArr<Type>(arr: Type[], miniArr: any): Type[] {
    return [...(Imm.copy<Type[]>(arr) as []), ...Imm.copy(miniArr)];
  }
}

export default Imm;
