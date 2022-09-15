import type { IExchange } from "@dahlia-labs/stableswap-sdk";
import type { Percent, TokenAmount } from "@dahlia-labs/token-utils";

export type Fees = Readonly<{
  trade: Readonly<Percent>;
  admin: Readonly<Percent>;
  deposit: Readonly<Percent>;
  withdraw: Readonly<Percent>;
}>;

export type IGauge = Readonly<{
  address: string;
  additionalRewards?: Readonly<TokenAmount>[];
}>;

export type Volume = Readonly<{
  volume: {
    total: number;
    day: number;
    week: number;
  } | null;
}>;

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

export type DisplayPool = Readonly<{
  name: string;
  chain: Chain;
  peg: Peg;
  pool: IExchange;
  gauge: IGauge | null;
  warningType?: WarningType;
}>;

export enum Coins {
  Bitcoin,
  Ether,
  USD,
  Celo,
  Eur,
}

export type Peg = Readonly<{
  coin: Coins;
  symbol: string;
  position: "before" | "after";
  decimals: number;
  priceQuery: string | null;
}>;
