import axios from "axios";
import cheerio from "cheerio";
import express from "express";
import mongoose from "mongoose";

const PORT = 8000;
const app = express();

mongoose.set("strictQuery", true);

app.listen(PORT, () => {
  console.log("app listening port: " + PORT);
});

export default function Main(maxPages = 50) {
  const paginationURLsToVisit = ["https://dinosaurpictures.org/"];

  const visitedURLs = [];

  const productURLs = new Set();

  // iterating until the queue is empty
  // or the iteration limit is hit
  while (paginationURLsToVisit.length !== 0 && visitedURLs.length <= maxPages) {
    // the current webpage to crawl
    const paginationURL = paginationURLsToVisit.pop();

    // retrieving the HTML content from paginationURL
    const pageHTML = axios.get(paginationURL);

    // adding the current webpage to the
    // web pages already crawled
    visitedURLs.push(paginationURL);

    // initializing cheerio on the current webpage
    const $ = cheerio.load("pageHTML.data");

    // retrieving the pagination URLs

    $(".view-all a").each((index, element) => {
      const paginationURL = $(element).attr("href");

      // adding the pagination URL to the queue
      // of web pages to crawl, if it wasn't yet crawled
      if (
        !visitedURLs.includes(paginationURL) &&
        !paginationURLsToVisit.includes(paginationURL)
      ) {
        paginationURLsToVisit.push(paginationURL);
      }
    });

    // retrieving the product URLs
    $("body div.container div.dino-list ul.inline-list a").each(
      (index, element) => {
        const productURL = $(element).attr("href");
        productURLs.add(productURL);
      }
    );
  }

  // logging the crawling results
  console.log([...productURLs]);

  // use productURLs for scraping purposes...
}

// running the main() function
Main()
  .then(() => {
    // successful ending
    process.exit(0);
  })
  .catch((e) => {
    // logging the error message
    console.error(e);

    // unsuccessful ending
    process.exit(1);
  });
