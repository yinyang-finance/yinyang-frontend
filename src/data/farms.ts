import { GARDEN_ADDRESS, YANG_DISTRIBUTOR_ADDRESS, YIN_DISTRIBUTOR_ADDRESS } from './addresses'
import { Token, tokens } from './tokens'

export interface Farm {
  poolId: number;
  token: Token;
  reward: Token;
  multiplier: number;
  lpTokens?: Token[];
  distributor: string;
  totalAllocPoints: number;
  depositFee: number;
}
export const yinFarms: Farm[] = [
  {
    poolId: 0,
    token: tokens.yangWCantoLp,
    reward: tokens.yin,
    lpTokens: [tokens.yang, tokens.wcanto],
    multiplier: 30,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 0,
  },
  {
    poolId: 1,
    token: tokens.yang,
    reward: tokens.yin,
    multiplier: 10,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 0,
  },
  {
    poolId: 2,
    token: tokens.cBonk,
    reward: tokens.yin,
    multiplier: 5,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 5,
  },
  {
    poolId: 3,
    token: tokens.eth,
    reward: tokens.yin,
    multiplier: 3,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 5,
  },
  {
    poolId: 4,
    token: tokens.wcanto,
    reward: tokens.yin,
    multiplier: 1,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 5,
  },
];
export const yangFarms: Farm[] = [
  {
    poolId: 0,
    token: tokens.yinWCantoLp,
    reward: tokens.yang,
    lpTokens: [tokens.yin, tokens.wcanto],
    multiplier: 30,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 0,
  },
  {
    poolId: 1,
    token: tokens.yin,
    reward: tokens.yang,
    multiplier: 10,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 0,
  },
  {
    poolId: 2,
    token: tokens.cantoInu,
    reward: tokens.yang,
    multiplier: 5,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 5,
  },
  {
    poolId: 3,
    token: tokens.atom,
    reward: tokens.yang,
    multiplier: 3,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 5,
  },
  {
    poolId: 4,
    token: tokens.wcanto,
    reward: tokens.yang,
    multiplier: 1,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 49,
    depositFee: 5,
  },
];
export const zenFarms: Farm[] = [
  {
    poolId: 0,
    token: tokens.yinWCantoLp,
    reward: tokens.zen,
    multiplier: 1,
    lpTokens: [tokens.yin, tokens.wcanto],
    distributor: GARDEN_ADDRESS,
    totalAllocPoints: 12,
    depositFee: 0,
  },
  {
    poolId: 1,
    token: tokens.yangWCantoLp,
    reward: tokens.zen,
    multiplier: 1,
    lpTokens: [tokens.yang, tokens.wcanto],
    distributor: GARDEN_ADDRESS,
    totalAllocPoints: 12,
    depositFee: 0,
  },
  {
    poolId: 2,
    token: tokens.zenWCantoLp,
    reward: tokens.zen,
    multiplier: 10,
    lpTokens: [tokens.zen, tokens.wcanto],
    distributor: GARDEN_ADDRESS,
    totalAllocPoints: 12,
    depositFee: 0,
  },
];
