const fs = require("fs");
const path = require("path");

function getMarkdownFiles(dir) {
  let results = [];

  if (!fs.existsSync(dir)) {
    return results;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(getMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }

  return results;
}

function extractJsonFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  if (!content.startsWith("---")) {
    throw new Error(`${filePath}: missing opening ---`);
  }

  const end = content.indexOf("---", 3);

  if (end === -1) {
    throw new Error(`${filePath}: missing closing ---`);
  }

  const jsonText = content.slice(3, end).trim();

  try {
    return JSON.parse(jsonText);
  } catch (error) {
    throw new Error(`${filePath}: invalid JSON frontmatter: ${error.message}`);
  }
}

function validateRequiredFields(data, filePath) {
  const requiredFields = [
    "asset_name",
    "asset_ticker",
    "contract_address",
    "assessment_date",
    "author",
    "links",
    "risk_scores",
    "risk_parameters"
  ];

  for (const field of requiredFields) {
    if (!(field in data)) {
      throw new Error(`${filePath}: missing required field "${field}"`);
    }
  }
}

function validateAssessment(filePath) {
  const data = extractJsonFrontmatter(filePath);
  validateRequiredFields(data, filePath);
  console.log(`Valid: ${filePath}`);
}

function main() {
  const assessmentDirs = [
    "assessments/draft",
    "assessments/published",
    "assessments/deprecated"
  ];

  const files = assessmentDirs.flatMap(getMarkdownFiles);

  if (files.length === 0) {
    console.log("No assessment files found.");
    return;
  }

  for (const file of files) {
    validateAssessment(file);
  }

  console.log("All assessment files are valid.");
}

main();
