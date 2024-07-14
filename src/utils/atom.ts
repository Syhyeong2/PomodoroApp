import { atom } from "recoil";

export const roundAtom = atom<number>({
  key: "rounds",
  default: 0,
});

export const goalAtom = atom<number>({
  key: "goals",
  default: 0,
});
