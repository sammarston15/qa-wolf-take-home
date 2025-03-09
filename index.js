// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");

  // get the rank and time posted from each news article
  
  let nth = 0



  // log all ranks on the page
  for (const li of await page.locator('.rank').all()) {
    console.log(await li.innerHTML())
    // await ranks.push(li.innerHTML())
  }




  // return await ranks
  
}

(async () => {
  console.log(await sortHackerNewsArticles());
})();
