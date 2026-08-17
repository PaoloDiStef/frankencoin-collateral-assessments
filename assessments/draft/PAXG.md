---
{
  "asset_name": "Pax Gold",
  "asset_ticker": "PAXG",
  "contract_address": "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
  "assessment_date": "2026-08-01",
  "author": "Paolo Di Stefano",
  "links": {
    "etherscan": "https://etherscan.io/token/0x45804880de22913dafe09f4980848ece6ecbaf78",
    "coingecko": "https://www.coingecko.com/en/coins/pax-gold",
    "website": "https://www.paxos.com/paxgold/",
    "docs": "https://github.com/paxosglobal/paxos-gold-contract",
    "other": "https://www.paxos.com/terms-and-conditions/pax-gold-terms-conditions"
  },
  "risk_scores": {
    "public_information": "Strong",
    "free_float": "Strong",
    "market_risk": "4.72%",
    "tail_risks": {
      "counterparty_risks": [
        {
          "name": "Paxos",
          "probability": "Very Low",
          "severity": "Severe",
          "compensation": "0.25%"
        }
      ],
      "smart_contract_risks": [
        {
          "name": "Smart-Contract Exploit",
          "probability": "Very Low",
          "severity": "Critical",
          "compensation": "0.50%"
        }
      ],
      "governance_risks": [
        {
          "name": "Issuer/admin-control and custody intervention risk",
          "probability": "Low",
          "severity": "Severe",
          "compensation": "0.50%"
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
    "retained_reserve": 0.10,
    "target_interest_rate": 0.0125,
    "global_minting_limit": null,
    "liquidation_price": 2500,
    "maturity": null,
    "auction_duration": 24,
    "minimum_collateral": 2
  }
}
---

# Collateral Risk Assessment: Pax Gold

## Summary

PAXG is a tokenized gold product issued by Paxos. Each token represents exposure to one fine troy ounce of gold held in allocated physical gold bars.

PAXG is a credible collateral candidate because the underlying exposure is gold, public information is strong, and the token has meaningful secondary-market liquidity. The main residual risks are not ordinary gold price volatility alone, but issuer/custody dependency, smart-contract risk, and admin-control risk.

## Introduction

Pax Gold (PAXG) is an ERC-20 token that gives holders exposure to allocated physical gold, while the tokenized structure introduces additional issuer, custody, redemption, and smart-contract dependencies.

For Frankencoin, the relevant collateral exposure is therefore not simply physical gold. It is gold exposure through the PAXG token, the Paxos issuance structure, the custody arrangement, and the secondary-market exit path.

## Free Float/Liquidity

Classification: Strong

PAXG has meaningful circulating supply, a long operating history, and secondary-market liquidity across centralized and decentralized venues. The underlying gold market is one of the deepest global commodity markets.

Liquidators should be able to value the asset using both PAXG market data and the global spot-gold price.

## Public Information

Classification: Strong

Public information is strong. PAXG has extensive public market data, meaning potential auction outcomes can easily be assessed.

## Market Risk

99%-VaR, 48h close-to-close: 4.72%

Maximum Drawdown, 48h close-to-close: 11.66%

The 99% 48h close-to-close VaR in the dataset is 4.72%, while the maximum 48h close-to-close drawdown is 11.66%. The current retained reserve is 10%, which gives a material buffer above the 99% VaR while also accounting for the challenger reward.

## Tail Risks

### Counterparty Risk: Paxos

Description: PAXG depends on Paxos as the issuer, the custody of allocated gold, and the operational process linking the token to physical gold ownership.

Probability: Very Low

Severity: Severe

Compensation: 0.25%

PAXG is a tokenized claim whose value depends on the issuer, custody structure, allocation records, and redemption framework continuing to function as expected. A failure in the issuer or custody arrangement could impair the token relative to physical gold. A 0.25% compensation is assigned for this counterparty and custody dependency.

### Smart Contract Risk: Smart-Contract Exploit

Description: PAXG relies on the Ethereum token contract and related issuer-controlled token-management functions.

Probability: Very Low

Severity: Critical

Compensation: 0.50%

The PAXG token contract is public and widely used, but tokenized commodity collateral still depends on correct smart-contract operation. A contract-level issue could impair transfers, settlement, balances, or liquidation proceeds. Given the potential severity of a token-contract failure, a 0.50% compensation is assigned.

### Governance Risk: Issuer/admin-control and custody intervention risk

Description: PAXG is a centrally issued tokenized commodity and thus carries issuer-admin, address-freezing, and government intervention risk.

Probability: Low

Severity: Severe

Compensation: 0.50%

PAXG is centrally issued and backed by physical gold held in custody. The token contract includes an asset-protection role that can freeze and unfreeze addresses. It can also wipe the balance of a frozen address, allowing the corresponding backing assets to be seized where required by law. The contract also includes owner-controlled pause functionality, supply-control permissions, and an upgradeable proxy structure.

Because the underlying gold is stored physically in identifiable custody arrangements, legal, regulatory, or administrative intervention could also impair redemption, secondary-market confidence, or the economic link between PAXG and physical gold. This is captured under governance/admin-control risk for consistency with other tokenized off-chain assets. A 0.50% compensation is assigned for this tail risk.

### Legal Risk: n/a

Description: No separate legal-risk premium is assigned in the current classification.

Probability: n/a

Severity: n/a

Compensation: 0%

Legal and operational considerations are mainly captured through counterparty/custody risk and governance/admin-control risk. No additional standalone legal-risk premium is assigned to avoid double-counting.

### Liquidity Risk: n/a

Description: No separate liquidity-risk premium is assigned in the current classification.

Probability: Negligible

Severity: n/a

Compensation: 0%

PAXG has meaningful secondary-market liquidity and the underlying gold market is highly liquid. Liquidation risk is still linked to token-specific market depth and bid/ask conditions, but no additional liquidity premium is assigned.

### Contagion Risk: n/a

Description: No separate contagion-risk premium is assigned.

Probability: Negligible

Severity: n/a

Compensation: 0%

PAXG would most likely not be affected by broad crypto-market stress, as the underlying exposure is gold rather than a crypto-native asset. No separate contagion-risk premium is assigned.

## Conclusion

PAXG is a credible collateral candidate for Frankencoin.

The underlying exposure is gold, and the 99% 48h close-to-close VaR of 4.72% supports a 10% retained reserve for ordinary market volatility.

The residual premium is driven mainly by tokenized-commodity risks: issuer and custody dependency, smart-contract risk, address-freezing controls, and possible government intervention affecting the physical gold in custody.
