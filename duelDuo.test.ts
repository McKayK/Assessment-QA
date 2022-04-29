import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

// test("Title shows up when page loads", async () => {
//   const title = await driver.findElement(By.id("title"));
//   const displayed = await title.isDisplayed();
//   expect(displayed).toBe(true);
// });

// test("draw button display choice", async () => {
//   await driver.findElement(By.xpath("//button[2]")).click();
//   const choices = await driver.findElement(By.id("choices"));
//   expect(choices).toBeTruthy;
//   await driver.sleep(3000);
// });

test("add to dual displays player duo", async () => {
  await driver.findElement(By.xpath("//button[2]")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath('//*[@class="bot-btn"]')).click();
  await driver.sleep(2000);
  const duo = await driver.findElement(By.id("player-duo"));
  const displayed2 = await duo.isDisplayed();
  expect(displayed2).toBeTruthy;
});
