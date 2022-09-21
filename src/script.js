import api_key from './keys';
import './style.css';
import createCard from './create-card';

let search_input;
const search = document.querySelector('#search');

let news = {
    link: [],
    image: [],
    title: [],
    description: [],
    publisher: [],
    pubDate: []
}

let language = 'en';

let chooseCategory = () => {
    let random_number = Math.floor(Math.random() * 6);
    // console.log(random_number);
    switch(random_number) {
        case 0:
            return category.zero;
        case 1:
            return category.one;
        case 2:
            return category.two;
        case 3:
            return category.three;
        case 4:
            return category.four;
        case 5:
            return category.five;
    }
}

let category = {
    zero: 'entertainment',
    one: 'environment',
    two: 'food',
    three: 'sports',
    four: 'top',
    five: 'world'
}

let url_news_zero = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg +
                '&language=' + language + 
                '&category=' + category.zero;

let url_news_one = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg +
                '&language=' + language + 
                '&category=' + category.one;

let url_news_two = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg +
                '&language=' + language + 
                '&category=' + category.two;

let url_news_three = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg +
                '&language=' + language + 
                '&category=' + category.three;

let url_news_four = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg +
                '&language=' + language + 
                '&category=' + category.four;

let url_news_five = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg +
                '&language=' + language + 
                '&category=' + category.five;

let url_news_random = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg +
                '&language=' + language + 
                '&category=' + chooseCategory();

let fetchNewsAPIOrg = (url_news) => {
    fetch(url_news, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        getDataFromNewsAPIOrg(response);
    })
    .catch((error) => console.log(error));
}

/**NEWS API ORG */
// Promise.all([
//     fetchNewsAPIOrg(url_news_four),
//     fetchNewsAPIOrg(url_news_five)
// ])

let getDataFromNewsAPIOrg = (response) => {
    for(let i=0; i<response.results.length; i++){
        //substitute data value to object array
        news.link[i] = response.results[i].link;
        news.image[i] = response.results[i].image_url;
        news.title[i] = response.results[i].title;
        news.description[i] = response.results[i].description;
        news.publisher[i] = response.results[i].source_id;
        news.pubDate[i] = response.results[i].pubDate;
        //call create card for each news article
        createCard(news.link[i], news.image[i], news.title[i], news.description[i], news.publisher[i], news.pubDate[i]);
    }
}

/*Using search functionality*/
search.addEventListener('keypress', (e) => {
    if (e.code == 'Enter' && search.value !== ''){
        search_input = search.value;
        let url_news_query = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg + 
                '&language=' + language + 
                '&q=' + search_input;
        fetchNewsAPIOrg(url_news_query);
    }
});

/*Test card*/
// const card = document.querySelector('.card');

// card.addEventListener('click', () => {
//     console.log('im clicked!');
//     url = 'https://google.com'
//     window.open(url, '_blank').focus();
// });


// let fetchNewsReddit = () => {
//     /**REDDIT NEWS **/
//     fetch('https://www.reddit.com/r/news.json')
//     .then((response) => (response.json()))
//     .then(function(response) {
//         // console.log(response.data.children.length);
//         for(let i=0; i<response.data.children.length; i++)
//         {
//             // console.log(response.data.children[i].data);
//             news.link[i] = response.data.children[i].data.url;
//             news.title[i] = response.data.children[i].data.title;
//             news.publisher[i] = response.data.children[i].data.domain;
//             createCard(news.link[i], news.image[i], news.title[i], news.description[i], news.publisher[i], news.pubDate[i]);
//         }
//     })
// }
