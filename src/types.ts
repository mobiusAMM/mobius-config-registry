import type { Percent, Token, TokenAmount } from "@dahlia-labs/token-utils";
import type JSBI from "jsbi";

export type Fees = {
  trade: Percent;
  admin: Percent;
  deposit: Percent;
  withdraw: Percent;
};

/**
 * Static definition of an exchange.
 */
export interface IExchange {
  address: string;
  lpToken: Token;
  tokens: readonly [Token, Token];
}

/**
 * Info loaded from the exchange. This is used by the calculator.
 */
export interface IExchangeInfo {
  ampFactor: JSBI;
  fees: Fees;
  lpTotalSupply: TokenAmount;
  reserves: readonly [TokenAmount, TokenAmount];
}

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
  POOF = "poof",
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
