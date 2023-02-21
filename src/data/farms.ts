import { YANG_DISTRIBUTOR_ADDRESS, YIN_DISTRIBUTOR_ADDRESS } from './addresses'
import { Token, tokens } from './tokens'

export interface Farm {
  poolId: number;
  token: Token;
  multiplier: number;
  yin: boolean;
  distributor: string;
  totalAllocPoints: number;
}
export const yinFarms: Farm[] = [
  {
    poolId: 0,
    token: tokens.yang,
    multiplier: 10,
    yin: true,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 19,
  },
  {
    poolId: 1,
    token: tokens.cantoShib,
    multiplier: 5,
    yin: true,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 19,
  },
  {
    poolId: 2,
    token: tokens.eth,
    multiplier: 3,
    yin: true,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 19,
  },
  {
    poolId: 3,
    token: tokens.note,
    multiplier: 1,
    yin: true,
    distributor: YIN_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 19,
  },
];
export const yangFarms: Farm[] = [
  {
    poolId: 0,
    token: tokens.yin,
    multiplier: 10,
    yin: false,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 19,
  },
  {
    poolId: 1,
    token: tokens.cantoShib,
    multiplier: 5,
    yin: false,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 19,
  },
  {
    poolId: 2,
    token: tokens.atom,
    multiplier: 3,
    yin: false,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 19,
  },
  {
    poolId: 3,
    token: tokens.wcanto,
    multiplier: 1,
    yin: false,
    distributor: YANG_DISTRIBUTOR_ADDRESS,
    totalAllocPoints: 19,
  },
];
