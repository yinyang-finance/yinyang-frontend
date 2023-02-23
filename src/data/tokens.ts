import {
  NOTE_ADDRESS,
  PAIR_YANG_WCANTO_ADDRESS,
  PAIR_YIN_NOTE_ADDRESS,
  PAIR_ZEN_NOTE_ADDRESS,
  PAIR_ZEN_WCANTO_ADDRESS,
  WCANTO_ADDRESS,
  YANG_ADDRESS,
  YIN_ADDRESS,
  ZEN_ADDRESS,
} from './addresses'

export interface Token {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
}

export const tokens = {
  wcanto: {
    name: "Wrapped Canto",
    symbol: "WCANTO",
    address: WCANTO_ADDRESS,
    decimals: 18,
  } as Token,
  note: {
    name: "Note",
    symbol: "NOTE",
    address: NOTE_ADDRESS,
    decimals: 18,
  } as Token,
  yin: {
    name: "Yin",
    symbol: "YIN",
    address: YIN_ADDRESS,
    decimals: 18,
  } as Token,
  yang: {
    name: "Yang",
    symbol: "YANG",
    address: YANG_ADDRESS,
    decimals: 18,
  } as Token,
  zen: {
    name: "Zen",
    symbol: "ZEN",
    address: ZEN_ADDRESS,
    decimals: 18,
  } as Token,
  yinNoteLp: {
    name: "Yin-Note Canto Dex LP",
    symbol: "YIN-NOTE LP",
    address: PAIR_YIN_NOTE_ADDRESS,
    decimals: 18,
  } as Token,
  yangWCantoLp: {
    name: "Yang-WCanto Canto Dex LP",
    symbol: "YANG-WCanto LP",
    address: PAIR_YANG_WCANTO_ADDRESS,
    decimals: 18,
  } as Token,
  zenWCantoLp: {
    name: "Zen-WCanto Canto Dex LP",
    symbol: "ZEN-WCANTO LP",
    address: PAIR_ZEN_WCANTO_ADDRESS,
    decimals: 18,
  } as Token,
  zenNoteLp: {
    name: "Zen-Note Canto Dex LP",
    symbol: "ZEN-NOTE LP",
    address: PAIR_ZEN_NOTE_ADDRESS,
    decimals: 18,
  } as Token,
  atom: {
    name: "Atom",
    symbol: "ATOM",
    address: "0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265",
    decimals: 6,
  } as Token,
  eth: {
    name: "Ether",
    symbol: "ETH",
    address: "0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687",
    decimals: 18,
  } as Token,
  cantoInu: {
    name: "Canto Inu",
    symbol: "cINU",
    address: "0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455",
    decimals: 18,
  } as Token,
  cantoShib: {
    name: "Canto Shib",
    symbol: "cShib",
    address: "0xA025ced4aab666c1bbBFd5A224816705b438E50B",
    decimals: 18,
  } as Token,
};
