import { isNil } from 'ramda';
import { create } from 'zustand';
import { IShared } from 'types/store/Shared';

const shared = create<IShared>((set) => ({
  title: '',
  setTitle: (title: string | null) => {
    if (isNil(title)) return;
    set(() => ({
      title,
    }));
  },
}));

export default shared;
