export interface Token {
  name: string;
  symbol: string;
  address: string;
}

export const tokens = {
  wcanto: {
    name: "Wrapped Canto",
    symbol: "WCANTO",
    address: "0x826551890Dc65655a0Aceca109aB11AbDbD7a07B",
  } as Token,
  note: {
    name: "Note",
    symbol: "NOTE",
    address: "0x4e71A2E537B7f9D9413D3991D37958c0b5e1e503",
  } as Token,
};
