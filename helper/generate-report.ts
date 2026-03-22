
const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
  jsonDir: "test-results",
  reportPath: "test-results/html-report",
  reportName: "Playwright BDD Report",
  metadata: {
    browser: { name: "chrome", version: "latest" },
    device: "Local test machine",
    platform: { name: "Windows", version: "10" },
  },
  customData: {
    title: "Run Info",
    data: [
      { label: "Project", value: "Playwright + Cucumber BDD" },
      { label: "Release", value: "1.0.0" },
      { label: "Execution Start Time", value: new Date().toString() },
      { label: "Execution End Time", value: new Date().toString() },
    ],
  },
});
