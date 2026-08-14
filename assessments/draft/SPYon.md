---
{
  "asset_name": "SPDR S&P 500 ETF (Ondo Tokenized)",
  "asset_ticker": "SPYon",
  "contract_address": "0xFeDC5f4a6c38211c1338aa411018DFAf26612c08",
  "assessment_date": "2026-08-01",
  "author": "Paolo Di Stefano",
  "links": {
    "etherscan": "https://etherscan.io/token/0xFeDC5f4a6c38211c1338aa411018DFAf26612c08",
    "coingecko": "https://www.coingecko.com/en/coins/spdr-s-p-500-etf-ondo-tokenized-etf",
    "website": "https://app.ondo.finance/assets/spyon",
    "docs": "https://docs.ondo.finance/ondo-stocks/overview",
    "other": "https://ondo.finance/ondo-stocks"
  },
  "risk_scores": {
    "public_information": "Strong",
    "free_float": "Strong",
    "market_risk": "3.38%",
    "tail_risks": {
      "counterparty_risks": [
        {
          "name": "Ondo Finance",
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
          "name": "Transfer restrictions / admin Control",
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
          "compensation": "n/a"
        }
      ],
      "liquidity_risks": [
        {
          "name": "Secondary-market or redemption impairment",
          "probability": "Negligible",
          "severity": "n/a",
          "compensation": "0%"
        }
      ],
      "contagion_risks": [
        {
          "name": "n/a",
          "probability": "n/a",
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
    "liquidation_price": 500,
    "maturity": null,
    "auction_duration": 24,
    "minimum_collateral": 10
  }
}
---

# Collateral Risk Assessment: SPDR S&P 500 ETF (Ondo Tokenized)

## Summary

SPYon is a tokenized representation of the SPDR S&P 500 ETF issued through Ondo’s tokenized-stock infrastructure. It gives holders economic exposure to SPY in ERC-20 form, allowing the asset to be used in DeFi while retaining exposure to a highly liquid and widely followed U.S. equity ETF.

The main risks are not the S&P 500 exposure itself, but the wrapper structure: issuer dependency, admin controls, and residual smart-contract risk.

## Introduction

SPYon represents tokenized exposure to the SPDR S&P 500 ETF. SPY is one of the largest and most liquid ETFs globally, tracking the S&P 500 index and hence providing diversified exposure to large-cap U.S. equities.

The tokenized version introduces an additional RWA/security-token layer. The token is not only exposed to the ordinary price movement of SPY, but also to the operational and legal mechanics of the Ondo tokenized asset wrapper. These include the issuer structure, transferability, redemption access, and the ability to trade or redeem the token during stress.

## Free Float/Liquidity

Classification: Strong

SPYon is one of the most liquid Ondo tokens, and Ondo's own interface taps directly into traditional SPY ETF liquidity. Besides Ondo's market place, the token is also listed on several centralized exchanges like Binance, Gate, MEXC, and BingX.

## Public Information

Classification: Strong

SPY has extensive public market data, meaning potential auction outcomes can easily be assessed.

## Market Risk

99%-VaR, 48h close-to-close: 3.38%

Maximum Drawdown, 48h close-to-close: 10.49%

The 99%-VaR over the last 2 years is only 3.38%. This means a retained reserve of 10% is sufficient to cover ordinary market volatility and account for the challenger reward during a liquidation in at least 99% of scenarios.

## Tail Risks

### Counterparty Risk: Ondo Finance

Description: SPYon depends on Ondo’s tokenized-asset issuance, redemption, operational, and custody structure.

Probability: Very Low

Severity: Severe

Compensation: 0.25%

The underlying SPY ETF exposure is highly regulated and transparent, but SPYon remains a claim through a tokenized-security structure.

A counterparty, custody, or redemption disruption could impair the ability of liquidators to exit the collateral efficiently. A 0.25% compensation is therefore assigned to account for this residual issuer/wrapper dependency.

### Smart Contract Risk: Smart-Contract Exploit

Description: SPYon is implemented as an ERC-20 token linked to a real-world asset off-chain, and therefore carries residual smart-contract risk.

Probability: Very Low

Severity: Critical

Compensation: 0.50%

The probability of a major smart-contract issue appears very low, but the severity could be critical if the token contract or transfer mechanics were impaired.

Unlike a native asset, the collateral value depends on the underlying ETF exposure in custody and the correct representation of the tokenized wrapper, meaning that a technical issue could lead to unbacked tokens.

### Governance Risk: Transfer restrictions / admin controls

Description: SPYon is a tokenized security-style asset and should be assumed to carry transfer, compliance, redemption, or admin-control restrictions.

Probability: Low

Severity: Severe

Compensation: 0.50%

SPYon is implemented through an upgradeable BeaconProxy and includes role-based administrative controls. Transfers are subject to compliance checks, and the token can be paused through a dedicated token pause manager. The compliance layer can reference blocklist and sanctions-list contracts. These controls introduce liquidation risk because transferability may depend on issuer-controlled compliance and pause mechanisms.

### Legal Risk: n/a

Description: No separate legal-risk premium is assigned in the current classification.

Probability: n/a

Severity: n/a

Compensation: n/a

Legal and regulatory considerations are mainly captured through the counterparty and governance/admin-control risk categories. No additional standalone legal-risk premium is assigned to avoid double-counting.

### Liquidity Risk: Secondary-market or redemption impairment

Description: SPYon liquidity depends on both token-level secondary markets and the ability of eligible participants to access Ondo’s issuance and redemption mechanics.

Probability: Negligible

Severity: n/a

Compensation: 0%

The underlying SPY ETF is highly liquid, the token is designed to reflect that traditional-market liquidity through Ondo's own interface, and is traded on multiple independent venues. This means no additional compensation is required.

### Contagion Risk: n/a

Description: No separate contagion-risk premium is assigned.

Probability: n/a

Severity: n/a

Compensation: 0%

SPYon is only exposed to broad equity-market stress through the underlying S&P 500 exposure, but should not be affected in crypto-market stress scenarios. That risk is captured in the market-risk reserve. No separate contagion premium is assigned under the current classification.

## Conclusion

SPYon is a high-quality collateral candidate for Frankencoin.

The underlying ETF exposure is high quality, liquid, and transparent. The key residual risks come from the tokenized-security wrapper: issuer dependency, admin controls, and residual smart-contract risk.
