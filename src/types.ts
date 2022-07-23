import type { IExchange } from "@dahlia-labs/stableswap-sdk";
import type { Percent, TokenAmount } from "@dahlia-labs/token-utils";

export type Fees = {
  trade: Percent;
  admin: Percent;
  deposit: Percent;
  withdraw: Percent;
};

export interface IGauge {
  address: string;
  additionalRewards: TokenAmount[];
}

export interface Volume {
  volume: {
    total: number;
    day: number;
    week: number;
  } | null;
}

export enum Chain {
  Celo,
  Ethereum,
  Polygon,
  Solana,
  Avax,
  Terra,
}

export enum WarningType {
  POOF,
  STCELO,
}

export interface DisplayPool {
  name: string;
  chain: Chain;
  peg: Peg;
  pool: IExchange;
  gauge: IGauge | null;
  warningType?: WarningType;
}

export enum Coins {
  Bitcoin,
  Ether,
  USD,
  Celo,
  Eur,
}

export interface Peg {
  coin: Coins;
  symbol: string;
  position: "before" | "after";
  decimals: number;
  priceQuery: string | null;
}
