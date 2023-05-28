import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();
const productURLs = new Set();

async function startCrawling() {
  const paginationURLsToVisit = ["https://dinosaurpictures.org/"];
  const visitedURLs = [];

  while (paginationURLsToVisit.length > 0) {
    const paginationURL = paginationURLsToVisit.pop();
    visitedURLs.push(paginationURL);

    const response = await axios.get(paginationURL);
    const $ = cheerio.load(response.data);

    $('a.view-all span.view-all-container h3#search-box-container div.main-content').each((index, element) => {
      const nextURL = $(element).attr("href");
      if (
        nextURL &&
        !visitedURLs.includes(nextURL) &&
        !paginationURLsToVisit.includes(nextURL)
      ) {
        paginationURLsToVisit.push(nextURL);
      }
    });

    $('body div.container div.dino-list ul.inline-list a').each(
      (index, element) => {
        const productURL = $(element).attr("href");
        productURLs.add(productURL);
      }
    );
  }
  console.log(productURLs)
  console.log('Crawling completed.');
}

startCrawling().then(() => {
  app.get('/api/crawled-data', (req, res) => {
    res.json([...productURLs]);
  });

  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});
