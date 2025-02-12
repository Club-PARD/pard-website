import { atom } from 'recoil';

export const projectIdState = atom({
  key: 'projectIdState',  // atom의 고유 키
  default: null,          // 초기 값
});