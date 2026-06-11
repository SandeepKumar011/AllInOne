const fs = require("fs");
const reporter = require("multiple-cucumber-html-reporter");

const reportPath = "test-results/html-report";

console.log("Deleting:", reportPath);

if (fs.existsSync(reportPath)) {
    fs.rmSync(reportPath, {
        recursive: true,
        force: true
    });
    console.log("Old report deleted");
} else {
    console.log("Report folder not found");
}

reporter.generate({
    jsonDir: "test-results",
    reportPath: reportPath,
    reportName: "Playwright BDD Report"
});