# Frankencoin Collateral Risk Assessments

This repository stores collateral risk assessments for assets that may be used as collateral in the Frankencoin protocol.

Each assessment is written as a Markdown file. The top of each file contains structured JSON data that can be processed automatically. The rest of the file contains the human-readable risk assessment.

The goal is to make collateral assessments transparent, consistent, and reusable for collateral.frankencoin.com.

## Repository Structure

- `.github/workflows/` — GitHub Actions workflows for automated checks.
- `assessments/draft/` — draft collateral assessments that are still being reviewed.
- `assessments/published/` — approved or published collateral assessments.
- `assessments/deprecated/` — deprecated or inactive collateral assessments.
- `schema/` — JSON schema used to validate the structured data.
- `templates/` — reusable Markdown templates for new assessments.
- `scripts/` — validation and automation scripts.

## How to Create a New Assessment

1. Copy the template file:

   `templates/collateral-assessment-template.md`

2. Create a new file in:

   `assessments/draft/`

   Example:

   `assessments/draft/wcrclx.md`

3. Fill in the structured JSON data at the top of the file.

4. Write the risk assessment in the Markdown sections below.

5. Commit the draft assessment.

6. Review the assessment internally.

7. Once finalised, move the file to:

   `assessments/published/`
