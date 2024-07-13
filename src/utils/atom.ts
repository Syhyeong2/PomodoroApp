import { atom } from "recoil";

export const roundAtom = atom({
  key: "rounds",
  default: 0,
});

export const goalAtom = atom({
  key: "goals",
  default: 0,
});
