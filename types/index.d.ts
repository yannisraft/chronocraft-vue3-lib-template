import { DefineComponent, Plugin } from "vue";

declare const ChronoCraftVu3Library: Exclude<Plugin["install"], undefined>;

export default ChronoCraftVu3Library;

export const CountDownTimer: Exclude<Plugin["install"], undefined> | DefineComponent;
export const TimeClock: Exclude<Plugin["install"], undefined> | DefineComponent;
