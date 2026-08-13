---
{
  "asset_name": "Coinbase Wrapped BTC",
  "asset_ticker": "cbBTC",
  "contract_address": "0xA4158e4feF15Bda281695FcAC00BBf095cDA0f9A",
  "assessment_date": "2027-08-01",
  "author": "Paolo Di Stefano",
  "links": {
    "etherscan": "https://etherscan.io/token/0xA4158e4feF15Bda281695FcAC00BBf095cDA0f9A",
    "coingecko": "https://www.coingecko.com/en/coins/coinbase-wrapped-btc",
    "website": "https://www.coinbase.com/cbbtc",
    "docs": "https://resources.cryptocompare.com/asset-management/16852/1726235547660.pdf",
    "other": "https://www.coinbase.com/cbbtc/proof-of-reserves"
  },
  "risk_scores": {
    "public_information": "Strong",
    "free_float": "Strong",
    "market_risk": "16.24%",
    "tail_risks": {
      "counterparty_risks": [
        {
          "name": "Coinbase",
          "probability": "Negligible",
          "severity": "n/a",
          "compensation": "0%"
        }
      ],
      "smart_contract_risks": [
        {
          "name": "Smart-Contract Exploit",
          "probability": "Very Low",
          "severity": "Severe",
          "compensation": "0.25%"
        }
      ],
      "governance_risks": [
        {
          "name": "Freezing",
          "probability": "Very Low",
          "severity": "Severe",
          "compensation": "0.25%"
        }
      ],
      "legal_risks": [
        {
          "name": "n/a",
          "probability": "n/a",
          "severity": "n/a",
          "compensation": "n/a"
        }
      ],
      "liquidity_risks": [
        {
          "name": "Redemption Failure",
          "probability": "Negligible",
          "severity": "n/a",
          "compensation": "n/a"
        }
      ],
      "contagion_risks": [
        {
          "name": "Systemic crypto-market contagion",
          "probability": "Negligible",
          "severity": "n/a",
          "compensation": "0.00%"
        }
      ]
    }
  },
  "risk_parameters": {
    "retained_reserve": 0.20,
    "target_interest_rate": 0.005,
    "global_minting_limit": null,
    "liquidation_price": 45000,
    "maturity": 46720,
    "auction_duration": 24,
    "minimum_collateral": 0.10
  }
}
---

# Collateral Risk Assessment: Coinbase Wrapped Bitcoin

## Summary

Coinbase Wrapped BTC is a high-quality collateral candidate, issued by a highly reputable counterparty and with limited smart-contract risk.

The main residual risks are not related to Bitcoin itself, but to the wrapper structure: Coinbase redemption availability, freezing rights, and residual smart-contract risk.

## Introduction

cbBTC is Coinbase’s wrapped Bitcoin token. Each cbBTC is backed with BTC in Coinbase custody.

It is designed to represent Bitcoin in ERC-20 form and allows BTC exposure to be used across Ethereum-compatible DeFi applications.

## Free Float/Liquidity

Classification: Strong

cbBTC is one of the most liquid ERC-20 BTC wrappers, with high trading volumes, trading on Coinbase, and several large pools across decentralized exchanges Uniswap and Curve.

## Public Information

Classification: Strong

Public information is strong as there are several highly liquid secondary markets, meaning potential auction outcomes can easily be assessed.

## Market Risk

MDD 48h: 16.24%

The Maximum Drawdown over 48 hours over the last 2 years of trading data from Yahoo, measured close-to-close, was 16.24%.

This means a retained reserve of 20% is sufficient to cover ordinary BTC market volatility and account for the challenger reward during a liquidation.

## Tail Risks

### Counterparty Risk: Coinbase

Description: cbBTC depends on Coinbase for custody, issuance, and redemption. This creates a centralized counterparty dependency. 

Probability: Negligible

Severity: n/a

Compensation: 0%

Coinbase is among the most reputable crypto exchanges, and is a regulated public entity. Therefore, the counterparty risk is classified as negligible, requiring no compensation.

### Smart Contract Risk: Smart-Contract Exploit

Description: cbBTC is an ERC-20 token and therefore carries residual smart-contract risk. A contract exploit or severe bridging failure could potentially lead to a depeg, though this is highly unlikely.

Probability: Very Low

Severity: Severe

Compensation: 0.25%

The probability appears very low, but the severity could be material if the contract were impaired.

### Governance Risk: Freezing

Description: Coinbase has admin controls that would allow them to step in and freeze cbBTC for compliance reasons, for example because of a US government request.

Probability: Very Low

Severity: Severe

Compensation: 0.25%

This is the main wrapper-specific risk. Even if the underlying BTC remains fully backed, a freeze or restriction could delay liquidation.

### Legal Risk: n/a

Description: No separate legal-risk premium is assigned. Legal and regulatory risks are mainly captured through the Coinbase counterparty and freezing/admin-control risks.

Probability: n/a

Severity: n/a

Compensation: n/a

### Liquidity Risk: Redemption Failure

Description: Liquidity is very high, but redemptions (withdrawing regular BTC) are only possible through Coinbase.

Probability: Negligible

Severity: n/a

Compensation: n/a

cbBTC benefits from Coinbase support and deep BTC liquidity. There could however be stress if Coinbase fails to process redemptions of users wanting to withdraw regular BTC. Again, since Coinbase is a highly reputable counterparty, this does not warrant any compensation.

### Contagion Risk: Systemic crypto-market contagion

Description: A severe crypto-market stress event could affect Bitcoin, Coinbase, major liquidity venues, and DeFi markets at the same time.

Probability: Negligible

Severity: n/a

Compensation: 0.00%

Even during severe market stress events like 10/10/2025, the liquidation cascades/flash crashes didn't impair assets like cbBTC beyond the assigned market risk, and Coinbase continued operating without any issues. Hence, no separate compensation is needed. 

## Conclusion

cbBTC is a very strong collateral candidate for Frankencoin.

The proposed retained reserve of 20% is appropriate relative to the observed 48h market-risk metric of 16.24%. The remaining risk premium is mainly driven by wrapper-specific risks, especially smart-contract risk and freezing/admin-control risk.
