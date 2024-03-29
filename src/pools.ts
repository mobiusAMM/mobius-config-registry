import { ChainId } from "@dahlia-labs/celo-contrib";
import {
  AAUSDC,
  ASUSDC,
  CBTC,
  CELO,
  CETH,
  CEUR,
  CUSD,
  DAI,
  PCELO,
  PCELO1,
  PEUR,
  PEUR1,
  PUSD,
  PUSD1,
  PUSDC,
  PUSDC1,
  STCELO,
  USDC,
  USDC1,
  USDCet,
  USDCM,
  USDTM,
  UST,
  WBTC,
  WBTC1,
  WETH,
  WETH1,
} from "@dahlia-labs/celo-tokens";
import { Token } from "@dahlia-labs/token-utils";

import type { DisplayPool, Peg } from "./types";
import { Chain, Coins, WarningType } from "./types";

const Bitcoin: Peg = {
  coin: Coins.Bitcoin,
  symbol: "₿",
  position: "after",
  decimals: 2,
  priceQuery: "bitcoin",
};

const Ether: Peg = {
  coin: Coins.Ether,
  symbol: "Ξ",
  position: "after",
  decimals: 2,
  priceQuery: "ethereum",
};

const Dollar: Peg = {
  coin: Coins.USD,
  symbol: "$",
  position: "before",
  decimals: 0,
  priceQuery: null,
};

const Celo: Peg = {
  coin: Coins.Celo,
  symbol: "Celo",
  position: "after",
  decimals: 0,
  priceQuery: "celo",
};

const Euro: Peg = {
  coin: Coins.Eur,
  symbol: "€",
  position: "before",
  decimals: 0,
  priceQuery: "celo-euro",
};

function lp(chainId: ChainId, address: string, name: string): Token {
  return new Token({
    chainId,
    address,
    decimals: 18,
    symbol: "MobLP",
    name,
  });
}

export const StablePools: Readonly<{
  [K in ChainId]: Readonly<DisplayPool[]>;
}> = {
  [ChainId.Mainnet]: [
    {
      name: "USDC (Portal)",
      chain: Chain.Ethereum,
      peg: Dollar,
      pool: {
        address: "0xC0BA93D4aaf90d39924402162EE4a213300d1d60".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0xE10FD4788A76d19bA0110b1BfDa5E13D35ED4359".toLowerCase(),
          "Mobius cUSD/USDCet LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], USDCet[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x7ed927E685d7196Ff2e7Bc48c5cB5e8af88c9332".toLowerCase(),
      },
    },
    {
      name: "Staked CELO",
      chain: Chain.Celo,
      peg: Celo,
      pool: {
        address: "0xEBf0536356256f8FF2a5Eb6C65800839801d8B95".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x4730ff6bC3008a40cf74D660D3f20d5b51646dA3".toLowerCase(),
          "Mobius CELO/stCELO LP"
        ),
        tokens: [CELO[ChainId.Mainnet], STCELO[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x70AE7265545f001cb015399D672B85D8f2CaCA72".toLowerCase(),
      },
      warningType: WarningType.STCELO,
    },
    {
      name: "UST (Allbridge)",
      chain: Chain.Terra,
      peg: Dollar,
      pool: {
        address: "0x9F4AdBD0af281C69a582eB2E6fa2A594D4204CAe".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x9438e7281D7E3e99A9dD21e0EAd9c6a254e17ab2".toLowerCase(),
          "Mobius cUSD/aUST LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], UST[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x107F94409746E8c8E6eFF139A100D17D9ca7FdfE".toLowerCase(),
      },
    },
    {
      name: "WETH (Optics V2)",
      chain: Chain.Ethereum,
      peg: Ether,
      pool: {
        address: "0x74ef28D635c6C5800DD3Cd62d4c4f8752DaACB09".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x4fF08e2a4E7114af4B575AeF9250144f95790982".toLowerCase(),
          "Mobius cETH/wETH LP"
        ),
        tokens: [CETH[ChainId.Mainnet], WETH[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x487c30CB18AA9Ced435911E2B414e0e85D7E52bB".toLowerCase(),
      },
    },
    {
      name: "USDC (Optics V2)",
      chain: Chain.Ethereum,
      peg: Dollar,
      pool: {
        address: "0x9906589Ea8fd27504974b7e8201DF5bBdE986b03".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x39b6F09ef97dB406ab78D869471adb2384C494E3".toLowerCase(),
          "Mobius cUSD/cUSDC LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], USDC[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xc96AeeaFF32129da934149F6134Aa7bf291a754E".toLowerCase(),
      },
    },
    {
      name: "DAI (Optics V2)",
      chain: Chain.Ethereum,
      peg: Dollar,
      pool: {
        address: "0xF3f65dFe0c8c8f2986da0FEc159ABE6fd4E700B4".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x274DD2dF039f1f6131419C82173D97770e6af6B7".toLowerCase(),
          "Mobius cUSD/cDAI LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], DAI[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xE1f9D952EecC07cfEFa69df9fBB0cEF260957119".toLowerCase(),
      },
    },
    {
      name: "WBTC (Optics V2)",
      chain: Chain.Ethereum,
      peg: Bitcoin,
      pool: {
        address: "0xaEFc4e8cF655a182E8346B24c8AbcE45616eE0d2".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x20d7274C5aF4f9DE6e8C93025e44aF3979d9Ab2b".toLowerCase(),
          "Mobius cBTC/wBTC LP"
        ),
        tokens: [CBTC[ChainId.Mainnet], WBTC[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x127b524c74C2162Ee4BB2e42d8d2eB9050C0293E".toLowerCase(),
      },
    },
    {
      name: "pUSDC (Optics V2)",
      chain: Chain.Polygon,
      peg: Dollar,
      pool: {
        address: "0xcCe0d62Ce14FB3e4363Eb92Db37Ff3630836c252".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x68b239b415970dD7a5234A9701cbB5BfaB544C7C".toLowerCase(),
          "Mobius cUSD/pUSDC LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], PUSDC[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x0A125D473cd3b1968e728DDF7d424c928C09222A".toLowerCase(),
      },
    },
    {
      name: "USDC (Optics V1)",
      chain: Chain.Ethereum,
      peg: Dollar,
      pool: {
        address: "0xA5037661989789d0310aC2B796fa78F1B01F195D".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0xd7Bf6946b740930c60131044bD2F08787e1DdBd4".toLowerCase(),
          "Mobius cUSD/cUSDC LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], USDC1[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xdAA2ab880b7f3D5697e6F85e63c28b9120AA9E07".toLowerCase(),
      },
    },
    {
      name: "aaUSDC (Allbridge)",
      chain: Chain.Avax,
      peg: Dollar,
      pool: {
        address: "0x0986B42F5f9C42FeEef66fC23eba9ea1164C916D".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x730e677f39C4Ca96012c394B9Da09A025E922F81".toLowerCase(),
          "Mobius cUSD/aaUSDC LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], AAUSDC[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xF2ae5c2D2D2eD13dd324C0942163054fc4A3D4d9".toLowerCase(),
      },
    },
    {
      name: "Poof cUSD V2",
      chain: Chain.Celo,
      peg: Dollar,
      warningType: WarningType.POOF,
      pool: {
        address: "0xa2F0E57d4cEAcF025E81C76f28b9Ad6E9Fbe8735".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x07e137E5605E15C93f22545868Fa70CECfCbbFFE".toLowerCase(),
          "Mobius cUSD/pUSD LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], PUSD[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xE7195E651Cc47853f0054d85c8ADFc79D532929f".toLowerCase(),
      },
    },
    {
      name: "Poof CELO V2",
      chain: Chain.Celo,
      peg: Celo,
      warningType: WarningType.POOF,
      pool: {
        address: "0xFc9e2C63370D8deb3521922a7B2b60f4Cff7e75a".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0xAfFD8d6b5e5A0e25034DD3D075532F9CE01C305c".toLowerCase(),
          "Mobius cUSD/pCELO LP"
        ),
        tokens: [CELO[ChainId.Mainnet], PCELO[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xD0d57a6689188F854F996BEAE0Cb1949FDB5FF86".toLowerCase(),
      },
    },
    {
      name: "Poof cEUR V2",
      chain: Chain.Celo,
      peg: Euro,
      warningType: WarningType.POOF,
      pool: {
        address: "0x23C95678862a229fAC088bd9705622d78130bC3e".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0xec8e37876Fd9De919B58788B87A078e546149F87".toLowerCase(),
          "Mobius cUSD/pEUR LP"
        ),
        tokens: [CEUR[ChainId.Mainnet], PEUR[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xCAEd243de23264Bdd8297c6eECcF320846eee18A".toLowerCase(),
      },
    },
    {
      name: "Poof cUSD V1",
      chain: Chain.Celo,
      peg: Dollar,
      warningType: WarningType.POOF,
      pool: {
        address: "0x02Db089fb09Fda92e05e92aFcd41D9AAfE9C7C7C".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x18d71b8664E69D6Dd61C79247dBf12bFAaf66C10".toLowerCase(),
          "Mobius cUSD/pUSD LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], PUSD1[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x2459BDb59a3BF6Ab6C412Ac0b220e7CDA1D4ea26".toLowerCase(),
      },
    },
    {
      name: "asUSDC (Allbridge)",
      chain: Chain.Solana,
      peg: Dollar,
      pool: {
        address: "0x63C1914bf00A9b395A2bF89aaDa55A5615A3656e".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0xAFEe90ab6A2D3B265262f94F6e437E7f6d94e26E".toLowerCase(),
          "Mobius cUSD/asUSDC LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], ASUSDC[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x27D9Bfa5F864862BeDC23cFab7e00b6b94488CC6".toLowerCase(),
      },
    },
    {
      name: "pUSDC (Optics V1)",
      chain: Chain.Polygon,
      peg: Dollar,
      pool: {
        address: "0x2080AAa167e2225e1FC9923250bA60E19a180Fb2".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0xf5b454cF47Caca418D95930AA03975Ee4bf409bc".toLowerCase(),
          "Mobius cUSD/pUSDC LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], PUSDC1[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x52517feb1Fc6141d5CF6718111C7Cc0FD764fA5d".toLowerCase(),
      },
    },
    {
      name: "wBTC (Optics V1)",
      chain: Chain.Ethereum,
      peg: Bitcoin,
      pool: {
        address: "0x19260b9b573569dDB105780176547875fE9fedA3".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x8cD0E2F11ed2E896a8307280dEEEE15B27e46BbE".toLowerCase(),
          "Mobius cBTC/wBTC LP"
        ),
        tokens: [CBTC[ChainId.Mainnet], WBTC1[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x1A8938a37093d34581B21bAd2AE7DC1c19150C05".toLowerCase(),
      },
    },
    {
      name: "wETH (Optics V1)",
      chain: Chain.Ethereum,
      peg: Ether,
      pool: {
        address: "0xE0F2cc70E52f05eDb383313393d88Df2937DA55a".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x846b784Ab5302155542c1B3952B54305F220fd84".toLowerCase(),
          "Mobius cETH/wETH LP"
        ),
        tokens: [CETH[ChainId.Mainnet], WETH1[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xD38e76E17E66b562B61c149Ca0EE53CEa1145733".toLowerCase(),
      },
    },
    {
      name: "USDT (Moss)",
      chain: Chain.Ethereum,
      peg: Dollar,
      pool: {
        address: "0xdBF27fD2a702Cc02ac7aCF0aea376db780D53247".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0xC7a4c6EF4A16Dc24634Cc2A951bA5Fec4398f7e0".toLowerCase(),
          "Mobius cUSD/cUSDT LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], USDTM[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xe2d6095685248F38Ae9fef1b360D772b78Ea19D1".toLowerCase(),
      },
    },
    {
      name: "USDC (Moss)",
      chain: Chain.Ethereum,
      peg: Dollar,
      pool: {
        address: "0x0ff04189Ef135b6541E56f7C638489De92E9c778".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x635aec36c4b61bac5eB1C3EEe191147d006F8a21".toLowerCase(),
          "Mobius cUSD/cUSDC LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], USDCM[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xd1B3C05FE24bda6F52e704daf1ACBa8c440d8573".toLowerCase(),
      },
    },
    {
      name: "Poof Celo V1",
      chain: Chain.Celo,
      peg: Celo,
      warningType: WarningType.POOF,
      pool: {
        address: "0x413FfCc28e6cDDE7e93625Ef4742810fE9738578".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x4D6B17828d0173668e8Eb730106444556a98c0F9".toLowerCase(),
          "Mobius Celo/pCelo LP"
        ),
        tokens: [CELO[ChainId.Mainnet], PCELO1[ChainId.Mainnet]],
      },
      gauge: {
        address: "0x5489b2F0A1992b889F47601D71E068Fd15c63f26".toLowerCase(),
      },
    },
    {
      name: "Poof cEUR V1",
      chain: Chain.Celo,
      peg: Euro,
      warningType: WarningType.POOF,
      pool: {
        address: "0x382Ed834c6b7dBD10E4798B08889eaEd1455E820".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x2642Ab16Bfb7A8b36EE42c9CbA2289C4Ca9F33b9".toLowerCase(),
          "Mobius cEUR/pEUR LP"
        ),
        tokens: [CEUR[ChainId.Mainnet], PEUR1[ChainId.Mainnet]],
      },
      gauge: {
        address: "0xCF34F4ec5DC9E09428A4f4a45475f6277694166c".toLowerCase(),
      },
    },
    {
      name: "Poof cUSD V1 [DISABLED]",
      chain: Chain.Celo,
      peg: Dollar,
      pool: {
        address: "0x81B6a3d9f725AB5d706d9e552b128bC5bB0B58a1".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x57f008172cF89b972db3db7dD032e66BE4AF1A8c".toLowerCase(),
          "Mobius pUSD Meta LP"
        ),
        tokens: [
          PUSD1[ChainId.Mainnet],
          lp(
            ChainId.Mainnet,
            "0xd7Bf6946b740930c60131044bD2F08787e1DdBd4".toLowerCase(),
            "Mobius cUSD/cUSDC LP"
          ),
        ],
      },
      gauge: {
        address: "0x1250D6dd3B51D20c14a8ECb10CC2dd713967767e".toLowerCase(),
      },
    },
    {
      name: "cUSD (Mento 1:1 Pool)",
      chain: Chain.Ethereum,
      peg: Dollar,
      pool: {
        address: "0xFa3df877F98ac5ecd87456a7AcCaa948462412f0".toLowerCase(),
        lpToken: lp(
          ChainId.Mainnet,
          "0x552b9AA0eEe500c60f09456e49FBc1096322714C".toLowerCase(),
          "Mobius cUSD/USDCet LP"
        ),
        tokens: [CUSD[ChainId.Mainnet], USDCet[ChainId.Mainnet]],
      },
      gauge: null,
    },
  ] as const,
  [ChainId.Alfajores]: [],
  [ChainId.Baklava]: [],
};
