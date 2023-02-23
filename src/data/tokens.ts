import { StaticImageData } from 'next/image'

import cantoLogo from '../assets/canto-network.png'
import cinuLogo from '../assets/cinu.png'
import atomLogo from '../assets/cosmos_hub.png'
import cshibLogo from '../assets/cshib.png'
import ethLogo from '../assets/ethereum.png'
import noteLogo from '../assets/note.png'
import yangLogo from '../assets/yang.png'
import yinLogo from '../assets/yin.png'
import zenLogo from '../assets/zen.png'
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
  logo: StaticImageData;
}

export const tokens = {
  wcanto: {
    name: "Wrapped Canto",
    symbol: "WCANTO",
    address: WCANTO_ADDRESS,
    decimals: 18,
    logo: cantoLogo,
  },
  note: {
    name: "Note",
    symbol: "NOTE",
    address: NOTE_ADDRESS,
    decimals: 18,
    logo: noteLogo,
  },
  yin: {
    name: "Yin",
    symbol: "YIN",
    address: YIN_ADDRESS,
    decimals: 18,
    logo: yinLogo,
  },
  yang: {
    name: "Yang",
    symbol: "YANG",
    address: YANG_ADDRESS,
    decimals: 18,
    logo: yangLogo,
  },
  zen: {
    name: "Zen",
    symbol: "ZEN",
    address: ZEN_ADDRESS,
    decimals: 18,
    logo: zenLogo,
  },
  yinNoteLp: {
    name: "Yin-Note Canto Dex LP",
    symbol: "YIN-NOTE LP",
    address: PAIR_YIN_NOTE_ADDRESS,
    decimals: 18,
    logo: cantoLogo,
  },
  yangWCantoLp: {
    name: "Yang-WCanto Canto Dex LP",
    symbol: "YANG-WCanto LP",
    address: PAIR_YANG_WCANTO_ADDRESS,
    decimals: 18,
    logo: cantoLogo,
  },
  zenWCantoLp: {
    name: "Zen-WCanto Canto Dex LP",
    symbol: "ZEN-WCANTO LP",
    address: PAIR_ZEN_WCANTO_ADDRESS,
    decimals: 18,
    logo: cantoLogo,
  },
  zenNoteLp: {
    name: "Zen-Note Canto Dex LP",
    symbol: "ZEN-NOTE LP",
    address: PAIR_ZEN_NOTE_ADDRESS,
    decimals: 18,
    logo: cantoLogo,
  },
  atom: {
    name: "Atom",
    symbol: "ATOM",
    address: "0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265",
    decimals: 6,
    logo: atomLogo,
  },
  eth: {
    name: "Ether",
    symbol: "ETH",
    address: "0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687",
    decimals: 18,
    logo: ethLogo,
  },
  cantoInu: {
    name: "Canto Inu",
    symbol: "cINU",
    address: "0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455",
    decimals: 18,
    logo: cinuLogo,
  },
  cantoShib: {
    name: "Canto Shib",
    symbol: "cShib",
    address: "0xA025ced4aab666c1bbBFd5A224816705b438E50B",
    decimals: 18,
    logo: cshibLogo,
  },
};
