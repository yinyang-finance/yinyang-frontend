import { NOTE_ADDRESS, WCANTO_ADDRESS, YANG_ADDRESS, YIN_ADDRESS, ZEN_ADDRESS } from './addresses'

export interface Token {
  name: string;
  symbol: string;
  address: string;
}

export const tokens = {
  wcanto: {
    name: "Wrapped Canto",
    symbol: "WCANTO",
    address: WCANTO_ADDRESS,
  } as Token,
  note: {
    name: "Note",
    symbol: "NOTE",
    address: NOTE_ADDRESS,
  } as Token,
  yin: {
    name: "Yin",
    symbol: "YIN",
    address: YIN_ADDRESS,
  } as Token,
  yang: {
    name: "Yang",
    symbol: "YANG",
    address: YANG_ADDRESS,
  } as Token,
  zen: {
    name: "Zen",
    symbol: "ZEN",
    address: ZEN_ADDRESS,
  } as Token,
  atom: {
    name: "Atom",
    symbol: "ATOM",
    address: "0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265",
  } as Token,
  eth: {
    name: "Ether",
    symbol: "ETH",
    address: "0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687",
  } as Token,
  cantoInu: {
    name: "Canto Inu",
    symbol: "cINU",
    address: "0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455",
  } as Token,
  cantoShib: {
    name: "Canto Shib",
    symbol: "cShib",
    address: "0xA025ced4aab666c1bbBFd5A224816705b438E50B",
  } as Token,
};
