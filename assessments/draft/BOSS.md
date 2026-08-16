---
{
  "asset_name": "Boss Info AG",
  "asset_ticker": "BOSS",
  "contract_address": "0x2e880962a9609aa3eab4def919fe9e917e99073b",
  "assessment_date": "2026-08-01",
  "author": "Paolo Di Stefano",
  "links": {
    "etherscan": "https://etherscan.io/token/0x2e880962a9609aa3eab4def919fe9e917e99073b",
    "coingecko": "",
    "website": "https://shares.bossinfo.com",
    "docs": "https://docs.aktionariat.com/en",
    "other": "https://reporting.bossinfo.com/en/2025/annual-financial-statements"
  },
  "risk_scores": {
    "public_information": "Sufficient",
    "free_float": "Sufficient",
    "market_risk": "n/a",
    "tail_risks": {
      "counterparty_risks": [
        {
          "name": "Boss Info AG",
          "probability": "Medium",
          "severity": "Critical",
          "compensation": "3.00%"
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
          "name": "n/a",
          "probability": "Negligible",
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
          "name": "Secondary Market Liquidity",
          "probability": "Low",
          "severity": "Severe",
          "compensation": "0.50%"
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
    "retained_reserve": 0.40,
    "target_interest_rate": 0.04,
    "global_minting_limit": 5000000,
    "liquidation_price": 4.00,
    "maturity": null,
    "auction_duration": 72,
    "minimum_collateral": 2500
  }
}
---

# Collateral Risk Assessment: Boss Info AG shares

## Summary

BOSS is the tokenized equity token of Boss Info AG, a private Swiss IT services and ERP implementation company. The token is issued using Aktionariat AG’s tokenization infrastructure and represents private-company equity exposure rather than a liquid crypto asset or listed security.

BOSS is a more complex collateral candidate because there is no continuously observable secondary-market price that can be used as a reliable liquidation reference. The relevant collateral value must therefore be derived from company valuation and thus warrants more conservative buffers.

The estimated valuation based on the latest financial statements supports a defensible equity value of approximately CHF 47 million, or around CHF 4.40 per share. This is based primarily on an upper-end but still industry-appropriate IT services multiple applied to the 2025 EBITDA recovery, after deducting net financial debt.

To account for valuation uncertainty, the liquidation price is set conservatively at CHF 4.00 per share. This reflects roughly a 10% haircut to the CHF 4.40 valuation reference. A 40% reserve is retained to absorb potential delays before liquidation can be completed, as well as a possible auction discount given the absence of meaningful secondary-market liquidity and therefore limited arbitrageur participation.

The 40% retained reserve and CHF 4.00 liquidation price are therefore important safeguards. The 4.00% target interest rate reflects the counterparty, liquidity, and residual smart-contract risk, while the 5,000,000 ZCHF global minting limit keeps the exposure contained. The position should be reassessed as updated financial statements become available.

## Introduction

Boss Info AG is a Swiss IT services, ERP implementation, and software integration business.

The 2025 financial statements show a meaningful recovery in operating performance, with CHF 38.5 million of operating revenue, CHF 6.3 million of EBITDA, CHF 0.9 million of EBIT, and CHF 5.7 million of operating cash flow. The company remains more balance-sheet constrained than a pure software business, with low book equity, substantial intangibles, and approximately CHF 8.5 million of net financial debt.

More detailed valuation methods produce the following ranges:

- Adjusted net asset value: CHF 0.4 million–6.4 million. This method has low relevance for an IT services and software-integration business, because customer relationships, implementation know-how, and internally generated business value are not fully captured on the balance sheet.

- Earnings value: CHF 19.8 million–44.5 million. This method has high relevance because it reflects the current sustainable profit base. The range ignores 2024 as a one-year exception and instead relies on the stronger operating years 2025, 2023, and 2022.

- Multiples valuation: CHF 29.5 million–53.7 million. This method has high relevance because it reflects observed market valuations for comparable IT services and software-integration businesses. In particular, applying roughly 8.5×–8.8× to 2025 EBITDA and deducting net financial debt supports approximately CHF 45 million–47 million of equity value, or around CHF 4.25–4.45 per share.

- Discounted cash flow: CHF 16.1 million–53.0 million. This method has medium relevance from a collateral perspective because it captures operating recovery and cash generation, but it remains sensitive to growth, margin, reinvestment, WACC, and terminal assumptions.

For the nature of the business, the earnings-value and multiples-based approaches are the most relevant. The upper-end but industry-appropriate IT services multiple supports a defensible value of around CHF 4.40 per share. Applying a 10% haircut gives a liquidation price of CHF 4.00 per share.

## Free Float/Liquidity

Classification: Sufficient

BOSS has a tokenized shareholder base and is issued using the technology from Aktionariat AG, with a small internally operated secondary market place for the tokens available for identified users.

However, BOSS is private-company equity. Liquidity is structurally weaker than for listed equities, major crypto assets, or large liquid staking tokens. Even if the token is technically transferable, liquidation depends on the availability of buyers for Boss Info AG equity at the relevant time.

The free-float classification is therefore sufficient.

## Public Information

Classification: Sufficient

Public information is sufficient. Financial statements are available, on-chain contract information is public, and sufficient company-level information about the nature of Boss Info AG's business model is available.

Public information is however materially weaker than for a listed company, as there is no liquid secondary market providing observable trading prices. Potential challengers must therefore estimate auction outcomes using fundamental data, which makes a projected auction outcome inherently less certain.

## Market Risk

99%-VaR, 48h close-to-close: n/a

Maximum Drawdown, 48h close-to-close: n/a

There is no reliable continuous secondary-market price series for BOSS.

## Tail Risks

### Counterparty Risk: Boss Info AG

Description: BOSS represents exposure to Boss Info AG, a private Swiss IT services and ERP implementation company with operating, financial, and execution risk.

Probability: Medium

Severity: Critical

Compensation: 3.00%

This is the dominant tail risk. BOSS is the equity of a private operating company. If the company fails, the token could potentially become worthless.

The 2025 financial statements show a meaningful EBITDA recovery and positive operating cash flow, but the company still has low book equity, substantial intangibles, and material financial debt. The collateral therefore carries meaningful private-company issuer risk. A 3.00% compensation is assigned for this risk.

Global Minting Limit: 5,000,000 ZCHF

Since this risk is classified as Medium probability, it triggers a global minting limit requirement based on the framework. This means the withdrawable amount should remain significantly below what the equity pool could theoretically absorb. A ZCHF 3 million withdrawable amount appears appropriate for the initial onboarding. With a retained reserve of 40%, this implies a global minting limit of 5,000,000 ZCHF.

### Smart Contract Risk: Smart-Contract Exploit

Description: BOSS is implemented as a tokenized equity instrument using Aktionariat AG technology and therefore carries residual smart-contract and token-infrastructure risk.

Probability: Very Low

Severity: Critical

Compensation: 0.50%

BOSS does not expose explicit pause, freeze, or blacklist functions by those names. However, it is not a vanilla ERC-20. The token is implemented as an upgradeable ShareBridgeToken with an external processor contract that handles balances, transfer validation, minting, burning, and seizure mechanics.

Transfers are subject to configurable rules through `canTransfer` / `setRules`. The current rule configuration appears minimal, but administrators can update transfer rules, which may affect transferability. The token also includes role-based supplier mint/burn functionality and a seizer mechanism, although no active seizer role was identified in the checked live roles.

Residual smart-contract risk therefore remains due to proxy upgradeability, processor dependency, configurable transfer rules, and role-based supply/seizure mechanics.

### Governance Risk: n/a

Description: No separate governance-risk premium is assigned in the current classification.

Probability: Negligible

Severity: n/a

Compensation: 0%

BOSS is private-company equity and therefore naturally exposed to shareholder, board, and management decisions. These are treated as part of the private-company issuer risk rather than a separate governance-risk premium.

No additional standalone governance-risk premium is assigned to avoid double-counting.

### Legal Risk: n/a

Description: No separate legal-risk premium is assigned in the current classification.

Probability: n/a

Severity: n/a

Compensation: 0%

BOSS is issued through a Swiss tokenized-share framework using Aktionariat technology. Legal and transfer mechanics remain relevant, but the current classification does not assign a separate legal-risk premium.

Legal and enforceability considerations are mainly captured through counterparty/issuer risk and liquidity risk.

### Liquidity Risk: Secondary Market Liquidity

Description: BOSS has limited secondary-market liquidity and no reliable secondary-market price.

Probability: Low

Severity: Severe

Compensation: 0.50%

This is a material tail risk. Even if the valuation is reasonable, liquidators may not be able to realize that value quickly. Private-company equity can require a longer sale process, a wider valuation discount, and a smaller buyer universe.

A 0.50% compensation is assigned for residual liquidity and valuation-realization risk.

### Contagion Risk: n/a

Description: No separate contagion-risk premium is assigned.

Probability: Negligible

Severity: n/a

Compensation: 0%

BOSS is not exposed to DeFi contagion in the same way as crypto-native collateral. Its primary risk is company-specific private-equity risk rather than protocol contagion.

No separate contagion-risk premium is assigned.

## Conclusion

BOSS is a more complex collateral candidate because there is no continuously observable secondary-market price that can be used as a reliable liquidation reference. The relevant collateral value must therefore be derived from company valuation and thus warrants more conservative buffers.

The 2025 financial statements support a defensible valuation of approximately CHF 4.40 per share when using an upper-end but industry-appropriate IT services multiple, cross-checked against earnings value and DCF outputs. Applying a 10% buffer gives a CHF 4.00 liquidation price.

The 40% retained reserve and CHF 4.00 liquidation price are therefore important safeguards. The 4.00% target interest rate reflects the counterparty, liquidity, and residual smart-contract risk, while the 5,000,000 ZCHF global minting limit keeps the exposure contained. The position should be reassessed as updated financial statements become available.

