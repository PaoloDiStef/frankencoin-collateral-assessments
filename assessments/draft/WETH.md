---
{
  "asset_name": "Wrapped Ether",
  "asset_ticker": "WETH",
  "contract_address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  "assessment_date": "2026-08-01",
  "author": "Paolo Di Stefano",
  "links": {
    "etherscan": "https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "coingecko": "https://www.coingecko.com/en/coins/weth",
    "website": "https://weth.io/",
    "docs": "https://github.com/gnosis/canonical-weth/blob/master/contracts/WETH9.sol",
    "other": "https://sourcify.dev/#/lookup/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  },
  "risk_scores": {
    "public_information": "Strong",
    "free_float": "Strong",
    "market_risk": "15.27%",
    "tail_risks": {
      "counterparty_risks": [
        {
          "name": "n/a",
          "probability": "n/a",
          "severity": "n/a",
          "compensation": "0%"
        }
      ],
      "smart_contract_risks": [
        {
          "name": "n/a",
          "probability": "n/a",
          "severity": "n/a",
          "compensation": "0%"
        }
      ],
      "governance_risks": [
        {
          "name": "n/a",
          "probability": "n/a",
          "severity": "n/a",
          "compensation": "0%"
        }
      ],
      "legal_risks": [
        {
          "name": "n/a",
          "probability": "n/a",
          "severity": "n/a",
          "compensation": "0%"
        }
      ],
      "liquidity_risks": [
        {
          "name": "n/a",
          "probability": "Negligible",
          "severity": "n/a",
          "compensation": "0%"
        }
      ],
      "contagion_risks": [
        {
          "name": "n/a",
          "probability": "Negligible",
          "severity": "n/a",
          "compensation": "0%"
        }
      ]
    }
  },
  "risk_parameters": {
    "retained_reserve": 0.20,
    "target_interest_rate": 0,
    "global_minting_limit": null,
    "liquidation_price": 1200,
    "maturity": null,
    "auction_duration": 24,
    "minimum_collateral": 2
  }
}
---

# Collateral Risk Assessment: Wrapped Ether

## Summary

WETH is the canonical ERC-20 wrapper for ETH on Ethereum. Each WETH token is backed 1:1 by ETH held in the WETH contract and can be unwrapped into native ETH by the holder.

WETH is a high-quality collateral candidate because the underlying exposure is ETH, public information is strong, and WETH is one of the most liquid and widely integrated assets in DeFi. The main risk is ordinary ETH market volatility during the liquidation window. No separate tail-risk premium is assigned.

## Introduction

Wrapped Ether (WETH) is an ERC-20 representation of ETH. Users deposit ETH into the WETH contract and receive WETH 1:1; users can later withdraw ETH by burning their WETH balance.

For Frankencoin, the relevant collateral exposure is therefore effectively ETH exposure in ERC-20 form. Unlike centrally issued wrapped assets, WETH does not depend on an external issuer, custodian, redemption agent, bridge operator, or admin-controlled token-management process.

## Free Float/Liquidity

Classification: Strong

WETH has very strong circulating supply, a long operating history, and deep liquidity across decentralized venues. It is one of the core base assets of Ethereum DeFi and is widely accepted as collateral across lending markets, trading venues, and liquidity pools.

## Public Information

Classification: Strong

Public information is strong. WETH has extensive public market data, meaning potential auction outcomes can easily be assessed.

## Market Risk

99%-VaR, 48h close-to-close: 13.39%

Maximum Drawdown, 48h close-to-close: 17.43%

The 99% 48h close-to-close VaR in the dataset is 13.39%, while the maximum 48h close-to-close drawdown is 17.94%. The current retained reserve is 20%, which gives a buffer above both the 99% VaR and the observed maximum 48h drawdown.

## Tail Risks

### Counterparty Risk: n/a

Description: No separate counterparty-risk premium is assigned.

Probability: n/a

Severity: n/a

Compensation: 0%

WETH is not a claim on an issuer, custodian, bridge, or redemption agent. It is a direct on-chain wrapper for ETH. No separate counterparty-risk premium is assigned.

### Smart Contract Risk: n/a

Description: No separate smart-contract-risk premium is assigned in the current classification.

Probability: n/a

Severity: n/a

Compensation: 0%

The canonical WETH contract is minimal, verified, and one of the most battle-tested contracts on Ethereum. It supports deposit, withdrawal, approval, and transfer functionality. The verified source does not expose owner, admin, pause, freeze, blacklist, upgrade, mint, burn, or selfdestruct controls. No separate smart-contract-risk premium is assigned.

### Governance Risk: n/a

Description: No separate governance-risk premium is assigned.

Probability: n/a

Severity: n/a

Compensation: 0%

WETH does not have issuer governance, admin-controlled transfer restrictions, address-level blocking, upgradeability, or discretionary redemption controls. No separate governance-risk premium is assigned.

### Legal Risk: n/a

Description: No separate legal-risk premium is assigned.

Probability: n/a

Severity: n/a

Compensation: 0%

WETH does not represent a legal claim against an issuer or custodian. It is an on-chain wrapper for native ETH. No separate legal-risk premium is assigned.

### Liquidity Risk: n/a

Description: No separate liquidity-risk premium is assigned in the current classification.

Probability: Negligible

Severity: n/a

Compensation: 0%

WETH is among the most liquid ERC-20 assets on Ethereum. Liquidation risk is primarily ordinary ETH market risk, already captured by the retained reserve. No additional liquidity premium is assigned.

### Contagion Risk: n/a

Description: No separate contagion-risk premium is assigned.

Probability: Negligible

Severity: n/a

Compensation: 0%

WETH may be affected by broad crypto-market stress because ETH itself is a core crypto asset, but this is already reflected in the market-risk reserve. No separate contagion-risk premium is assigned.

## Conclusion

WETH is a high-quality collateral candidate for Frankencoin.

The underlying exposure is ETH, and a 20% reserve sufficiently supports the observed market volatility.

No residual tail-risk premium is assigned because WETH is a minimal, non-upgradeable ETH wrapper without issuer, custody, bridge, freeze, blacklist, pause, or admin-control risk.
