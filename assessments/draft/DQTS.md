---
{
  "asset_name": "draggable quitt.shares",
  "asset_ticker": "DQTS",
  "contract_address": "0x8747a3114ef7f0eebd3eb337f745e31dbf81a952",
  "assessment_date": "2026-08-01",
  "author": "Paolo Di Stefano",
  "links": {
    "etherscan": "https://etherscan.io/token/0x8747a3114ef7f0eebd3eb337f745e31dbf81a952",
    "coingecko": "",
    "website": "https://shares.quitt.ch",
    "docs": "https://docs.aktionariat.com/en",
    "other": "https://github.com/Frankencoin-ZCHF/Frankencoin/discussions/24"
  },
  "risk_scores": {
    "public_information": "Sufficient",
    "free_float": "Sufficient",
    "market_risk": "n/a",
    "tail_risks": {
      "counterparty_risks": [
        {
          "name": "Service Hunter AG",
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
    "liquidation_price": 4.80,
    "maturity": null,
    "auction_duration": 72,
    "minimum_collateral": 2200
  }
}
---

# Collateral Risk Assessment: Draggable quitt.shares

## Summary

DQTS is the tokenized equity token of ServiceHunter AG, a private Swiss SaaS company. The token is issued using Aktionariat AG’s tokenization infrastructure and represents private-company equity exposure rather than a liquid crypto asset or listed security.

DQTS is a more complex collateral candidate because there is no continuously observable secondary-market price that can be used as a reliable liquidation reference. The relevant collateral value must therefore be derived from company valuation and thus warrants more conservative buffers.

The estimated valuation based on the latest financial statements is CHF 16 million company valuation. With 2,000,000 total shares, this implies an equity value of CHF 8.00 per share. 

To account for valuation uncertainty, the liquidation price is set conservatively at CHF 6.00 per share. A 40% reserve is retained to absorb potential delays before liquidation can be completed, as well as a possible auction discount given the absence of meaningful secondary-market liquidity and therefore limited arbitrageur participation.

The 40% retained reserve and CHF 4.80 liquidation price are therefore important safeguards. The 4.00% target interest rate reflects the counterparty, liquidity, and residual smart-contract risk, while the 5,000,000 ZCHF global minting limit keeps the exposure contained. The position should be reassessed reviewable as updated financial statements become available. 

## Introduction

ServiceHunter AG operates quitt, a SaaS platform for household employment administration.

The 2025 financial statements show that the Swiss core business is solid and profitable, with CHF 5.5 million of revenue in 2025. The acquired German and UK entities are growing but currently still loss-making. Applying a 10× multiple to the Swiss entity’s CHF 1.6 million EBITDA supports the proposed CHF 16 million valuation.

More detailed valuation methods produce the following ranges:

- Adjusted net asset value: CHF 0.2 million–4.0 million. This method has low relevance for a SaaS company, because intellectual property and the customer base are not captured on the balance sheet.

- Earnings value: CHF 8.6 million–16.6 million. This method has high relevance because it reflects the current sustainable profit base, although it does not fully capture growth.

- Multiples valuation: CHF 19.8 million–30.7 million. This method has high relevance because it reflects observed market transactions for comparable companies.

- Discounted cash flow: CHF 26 million–37 million. This method has medium relevance from a collateral perspective because it captures growth potential, but growth remains uncertain.

For the nature of the business, the earnings-value and multiples-based approaches are the most relevant. Both support the CHF 16 million valuation. Based on 2,000,000 total shares, this implies a valuation of CHF 8.00 per share.

## Free Float/Liquidity

Classification: Sufficient

DQTS has a tokenized shareholder base and is issued using the technology from Aktionariat AG, with a small internally operated secondary market place for the tokens available for identified users.

However, DQTS is private-company equity. Liquidity is structurally weaker than for listed equities, major crypto assets, or large liquid staking tokens. Even if the token is technically transferable, liquidation depends on the availability of buyers for ServiceHunter AG equity at the relevant time.

The free-float classification is therefore sufficient.

## Public Information

Classification: Sufficient

Public information is sufficient. Financial statements are available, on-chain contract information is public, and sufficient company-level information about the nature of ServiceHunter AG's business model.

Public information is however materially weaker than for a listed company, as there is no liquid secondary market providing observable trading prices. Potential challengers must therefore estimate auction outcomes using fundamental data, which makes a projected auction outcome inherently less certain.

## Market Risk

99%-VaR, 48h close-to-close: n/a

Maximum Drawdown, 48h close-to-close: n/a

There is no reliable continuous secondary-market price series for DQTS.

## Tail Risks

### Counterparty Risk: Service Hunter AG

Description: DQTS represents exposure to ServiceHunter AG, a private SaaS company with operating, financial, and execution risk.

Probability: Medium

Severity: Critical

Compensation: 3.00%

This is the dominant tail risk. DQTS is the equity of a private operating company. If the company fails, the token could potentially become worthless.

The Swiss business is currently profitable and supports the valuation, but the German and UK entities are still loss-making. The collateral therefore carries meaningful private-company issuer risk. A 3.00% compensation is assigned for this risk.

Global Minting Limit: 5,000,000 ZCHF

Since this risk is classified as Medium probability, it triggers a global minting limit requirement based on the framework. This means the withdrawable amount should remain significantly below what the equity pool could theoretically absorb. A ZCHF 3 million withdrawable amount at the current size of the equity pool of around ZCHF 3.8 million therefore seems appropriate. With a retained reserve of 40%, this implies a global minting limit of 5,000,000 ZCHF.

### Smart Contract Risk: Smart-Contract Exploit

Description: DQTS is implemented as a tokenized equity instrument using Aktionariat AG technology and therefore carries residual smart-contract and token-infrastructure risk.

Probability: Very Low

Severity: Critical

Compensation: 0.50%

DQTS has no identified proxy upgrade, pause, freeze, or blacklist function. Residual smart-contract risk nevertheless remains because the token is not a vanilla ERC-20.

It uses Aktionariat’s bespoke draggable-share framework, including acquisition-offer hooks, migration mechanics, wrapping/unwrapping, and lost-key recovery. These mechanisms expand the integration surface and may affect transferability or token accounting in edge cases.

The probability for a significant exploit appears very low, but the severity could be critical; a 0.50% compensation is therefore assigned.

### Governance Risk: n/a

Description: No separate governance-risk premium is assigned in the current classification.

Probability: Negligible

Severity: n/a

Compensation: 0%

DQTS is private-company equity and therefore naturally exposed to shareholder, board, and management decisions. These are treated as part of the private-company issuer risk rather than a separate governance-risk premium.

No additional standalone governance-risk premium is assigned to avoid double-counting.

### Legal Risk: n/a

Description: No separate legal-risk premium is assigned in the current classification.

Probability: n/a

Severity: n/a

Compensation: 0%

DQTS is issued through a Swiss tokenized-share framework using Aktionariat technology. Legal and transfer mechanics remain relevant, but the current classification does not assign a separate legal-risk premium.

Legal and enforceability considerations are mainly captured through counterparty/issuer risk and liquidity risk.

### Liquidity Risk: Secondary Market Liquidity

Description: DQTS has limited secondary-market liquidity and no reliable secondary-market price.

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

DQTS is not exposed to DeFi contagion in the same way as crypto-native collateral. Its primary risk is company-specific private-equity risk rather than protocol contagion.

No separate contagion-risk premium is assigned.

## Conclusion

DQTS is a more complex collateral candidate because there is no continuously observable secondary-market price that can be used as a reliable liquidation reference. The relevant collateral value must therefore be derived from company valuation and thus warrants more conservative buffers.

The 40% retained reserve and CHF 4.80 liquidation price are therefore important safeguards. The 4.00% target interest rate reflects the counterparty, liquidity, and residual smart-contract risk, while the 5,000,000 ZCHF global minting limit keeps the exposure contained. The position should be reassessed reviewable as updated financial statements become available.
