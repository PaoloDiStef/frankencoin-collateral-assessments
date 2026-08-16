---
{
  "asset_name": "Liquid Staked ETH",
  "asset_ticker": "LsETH",
  "contract_address": "0x8c1BEd5b9a0928467c9B1341Da1D7BD5e10b6549",
  "assessment_date": "2026-08-01",
  "author": "Paolo Di Stefano",
  "links": {
    "etherscan": "https://etherscan.io/token/0x8c1bed5b9a0928467c9b1341da1d7bd5e10b6549",
    "coingecko": "https://www.coingecko.com/en/coins/liquid-staked-ethereum",
    "website": "https://liquidcollective.io/",
    "docs": "https://docs.liquidcollective.io/v1",
    "other": "https://liquidcollective.io/what-is-lseth/"
  },
  "risk_scores": {
    "public_information": "Strong",
    "free_float": "Sufficient",
    "market_risk": "16.84%",
    "tail_risks": {
      "counterparty_risks": [
        {
          "name": "Liquid Collective",
          "probability": "Very Low",
          "severity": "Severe",
          "compensation": "0.25%"
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
          "name": "Admin-control and protocol parameter control",
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
          "compensation": "0%"
        }
      ],
      "liquidity_risks": [
        {
          "name": "Secondary-market or withdrawal liquidity impairment",
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
    "retained_reserve": 0.25,
    "target_interest_rate": 0.0125,
    "global_minting_limit": null,
    "liquidation_price": 1162,
    "maturity": null,
    "auction_duration": 24,
    "minimum_collateral": null
  }
}
---

# Collateral Risk Assessment: Liquid Staked ETH

## Summary

LsETH is the liquid staking receipt token of Liquid Collective. It represents ETH staked through the Liquid Collective protocol and gives holders exposure to staked ETH plus accrued staking rewards.

LsETH is a credible collateral candidate because the underlying exposure is ETH, public information is strong, and liquid staking is a well-established collateral category. The main residual risks are smart-contract risk, admin-control, and a potential redemption or secondary-market liquidity impairment.

## Introduction

Liquid Staked ETH (LsETH) is an ERC-20 receipt token issued when ETH is staked through Liquid Collective. The token follows a cToken-style exchange-rate model, meaning the value of one LsETH increases relative to ETH as staking rewards accrue.

Liquid Collective is designed as an institutional liquid staking protocol with a distributed operator set and public documentation.

## Free Float/Liquidity

Classification: Sufficient

LsETH has meaningful circulating supply, but its secondary market liquidity is materially lower the largest liquid staking token, wstETH. This supports a sufficient rather than strong free-float classification, as exit capacity relies mostly on the functioning of the Liquid Collective withdrawal path.

## Public Information

Classification: Strong

Public information is strong. LsETH is traded on secondary markets, meaning potential auction outcomes can easily be assessed.

## Market Risk

99%-VaR, 48h close-to-close: 13.73%

Maximum Drawdown, 48h close-to-close: 16.84%

The maximum 48h close-to-close drawdown over the last two years was 16.84%. The current retained reserve is 25%, which gives a material buffer above the observed 48h market-risk measure.

A reserve of 20% would still remain above the observed maximum 48h close-to-close drawdown and account for the challenger reward. The additional 5% are however a welcome buffer to account for possible redemption delays when secondary market liquidity is not sufficient.
  
## Tail Risks

### Counterparty Risk: Liquid Collective

Description: LsETH depends on Liquid Collective’s staking infrastructure, operator set, withdrawal process, and protocol operations.

Probability: Very Low

Severity: Severe

Compensation: 0.25%

The underlying exposure is ETH, but LsETH is not native ETH. It depends on the correct functioning of the staking protocol and its operators. Severe operator failure, withdrawal disruption, or a material slashing event could impair the token relative to ETH. A 0.25% compensation is assigned for this residual dependency.

### Smart Contract Risk: Smart-Contract Exploit

Description: LsETH is implemented through upgradeable smart contracts and relies on protocol accounting for deposits, withdrawals, and the LsETH/ETH exchange rate.

Probability: Very Low

Severity: Severe

Compensation: 0.25%

The LsETH contract is verified and public, but the implementation includes protocol-specific staking and accounting logic. A contract-level issue could impair transfers, redemptions, or exchange-rate accounting. A 0.25% compensation appears appropriate.

### Governance Risk: Admin-control and protocol parameter control

Description: LsETH includes admin-controlled upgrade and configuration functions, including proxy upgradeability, allowlist/denylist mechanics, pause functionality, oracle configuration, fee settings, and protocol component updates.

Probability: Very Low

Severity: Severe

Compensation: 0.25%

LsETH does not appear to include a generic issuer-controlled transfer-restriction function for ordinary ERC-20 transfers. However, the protocol includes upgradeability and admin/configuration controls, including proxy administration, allowlist-related configuration for protocol access, oracle configuration, fee settings, and protocol component updates.

These controls are normal for an institutional liquid staking protocol, but they are relevant for collateral risk because they may affect withdrawal access, protocol accounting, exchange-rate mechanics, or liquidation exit paths. A 0.25% compensation is assigned for this residual governance/admin-control risk.

### Legal Risk: n/a

Description: No separate legal-risk premium is assigned in the current classification.

Probability: n/a

Severity: n/a

Compensation: 0%

Legal and operational considerations are mainly captured through governance/admin-control risk and liquidity/withdrawal risk. No additional standalone legal-risk premium is assigned to avoid double-counting.

### Liquidity Risk: Secondary-market or withdrawal liquidity impairment

Description: LsETH liquidity depends on both secondary-market depth and the ability to exit through the Liquid Collective withdrawal process.

Probability: Low

Severity: Severe

Compensation: 0.50%

LsETH liquidity is materially below native ETH and below the largest liquid staking token, wstETH. In a stress event, liquidators may face limited secondary-market depth, withdrawal delays, or operational frictions when converting LsETH back into ETH value. A 0.50% premium is assigned for this residual liquidity and exit-path risk.

### Contagion Risk: n/a

Description: No separate contagion-risk premium is assigned.

Probability: Negligible

Severity: n/a

Compensation: 0%

LsETH remains exposed to broad ETH and liquid-staking market stress, but this is already reflected in the market-risk reserve and the LST-specific tail-risk categories.

## Conclusion

LsETH is a credible collateral candidate for Frankencoin.

The underlying exposure is ETH, and the observed 48h market-risk drawdown of 16.84%. The residual premium is driven by LST-specific risks: staking operations, smart-contract/accounting risk, admin-control, and liquidity or withdrawal friction.
