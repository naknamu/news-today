import "./style.css";
import createCard from "./create-card";
import createEmptyMessage from "./create-emptyMessage";
import { createLoadingAnimation, deleteLoadingAnimation } from "./loading";
import {
  api_key,
  news,
  language,
  chooseCategory,
  category,
  url_news_one,
  url_news_two,
  url_news_three,
  url_news_four,
  url_news_five,
  url_news_random,
} from "./variables";

/**Locate main div content in DOM*/
const content = document.querySelector(".content");

//**FETCH DATA FROM NEWS API */
async function fetchNewsAPIOrg(url_news) {
  //showing loading animation
  createLoadingAnimation(content);

  const response = await fetch(url_news, { mode: "cors" });
  const newsData = await response.json();

  if (newsData.results.length === 0) {
    //show a message if search is empty
    createEmptyMessage(content);
  } else {
    //otherwise delete loading animation
    deleteLoadingAnimation();
    //get data from NEWS API and create HTML news card elements
    getDataFromNewsAPIOrg(newsData);
  }

  return newsData;
}

/*SUBSTITUTE VALUE FROM API DATA TO CREATE DOM ELEMENTS**/
let getDataFromNewsAPIOrg = (response) => {
  for (let i = 0; i < response.results.length; i++) {
    //substitute data value to object array
    news.link[i] = response.results[i].link;
    news.image[i] = response.results[i].image_url;
    news.title[i] = response.results[i].title;
    news.description[i] = response.results[i].description;
    news.publisher[i] = response.results[i].source_id;
    news.pubDate[i] = response.results[i].pubDate;
    //call create card for each news article
    createCard(
      news.link[i],
      news.image[i],
      news.title[i],
      news.description[i],
      news.publisher[i],
      news.pubDate[i]
    );
  }
};

/**WHEN WINDOW IS FIRST LOADED, THIS FUNCTION IS CALLED */
window.onload = () => {
  /**NEWS API ORG */
  Promise.all([
    //default news that will be loaded will be from top news
    fetchNewsAPIOrg(url_news_four),
  ]);
};

/*Using search functionality*/
let search_input;
const search = document.querySelector("#search");

search.addEventListener("keypress", (e) => {
    if (e.keyCode === 13 && search.value !== "") {
      console.log("search started!");
      //clear content
      content.textContent = "";
      search_input = search.value;
      let url_news_query =
        "https://newsdata.io/api/1/news?apikey=" +
        api_key.newsapiorg +
        "&language=" +
        language +
        "&q=" +
        search_input;
      fetchNewsAPIOrg(url_news_query);
    }
  });
