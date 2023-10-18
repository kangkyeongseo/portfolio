import { atom } from "recoil";

export const currentOrderState = atom({
  key: "currentOrder",
  default: 1,
});
