
import { BeforeAll, AfterAll, Before, After, ITestCaseHookParameter, Status, World } from "@cucumber/cucumber";
import { setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext, firefox} from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

let browser: Browser;
let context: BrowserContext;
setDefaultTimeout(90 * 1000);

BeforeAll(async function () {
  //for single browser instance
  //browser = await chromium.launch({ headless: false,
  //args: ["--start-maximized"]});

    //for single browser instance with multiple browser options
  const browserType = process.env.BROWSER || "chromium";

  if (browserType === "firefox") {
    browser = await firefox.launch({
      headless: false
    });
  } else {
    browser = await chromium.launch({
      headless: false,
      args: ["--start-maximized"]
    });
  }
});

Before(async function () {
  context = await browser.newContext();
  pageFixture.page = await context.newPage();
});

After(async function (this: World, scenario: ITestCaseHookParameter) {
  if (scenario.result?.status === Status.FAILED) {
    const img = await pageFixture.page.screenshot({ type: "png" });
    await this.attach(img, "image/png");
  }

  if (pageFixture.page && !pageFixture.page.isClosed()) {
    await pageFixture.page.close();
  }
  if (context) {
    await context.close();
  }
});

AfterAll(async function () {
  await browser.close();
});

