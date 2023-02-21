import Decimal from 'decimal.js'

export * from "./addresses";
export * from "./tokens";
export const APP_NAME = "YinYang";
export const EXPLORER_URL = "https://evm.explorer.canto.io/address/";
export const REWARDS_PER_BLOCK = new Decimal(10 ** 22).div(14400);
