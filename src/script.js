import api_key from './keys';
import './style.css';

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
    console.log(random_number);
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

let url_news = 'https://newsdata.io/api/1/news?apikey=' + api_key.newsapiorg +
                '&language=' + language + 
                '&category=' + category.four;

// console.log(api_key.newsapiorg);

let fetchNewsReddit = () => {
    /**REDDIT NEWS **/
    fetch('https://www.reddit.com/r/news.json')
    .then((response) => (response.json()))
    .then(function(response) {
        // console.log(response.data.children.length);
        for(let i=0; i<response.data.children.length; i++)
        {
            // console.log(response.data.children[i].data);
            news.link[i] = response.data.children[i].data.url;
            news.title[i] = response.data.children[i].data.title;
            news.publisher[i] = response.data.children[i].data.domain;
            createCard(news.link[i], news.image[i], news.title[i], news.description[i], news.publisher[i], news.pubDate[i]);
        }
    })
}

let fetchNewsAPIOrg = () => {
    fetch(url_news, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        // console.log(response);
        getDataFromNewsAPIOrg(response);
    })
    .catch((error) => console.log(error));
}

/**NEWS API ORG */
Promise.all([
    fetchNewsAPIOrg(),
    // fetchNewsReddit()
])

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

/**Function to CREATE NEWS CARD DYNAMICALLY **/
let createCard = (link, image_source, headline_text, details_text, publisher_text, date_text) => {
    const content = document.querySelector('.content');
    //create card
    const card = document.createElement('div');
    content.appendChild(card);
    card.classList.add('card');
    card.addEventListener('click', () => {
        console.log('im clicked!');
        url = link;
        window.open(url, '_blank').focus();
    });
    //create image
    // console.log(image_source);
    if (image_source !== null && image_source !== undefined) {
        const img = document.createElement('img');
        img.src = image_source;
        card.appendChild(img);
    }
    //create headline
    const headline = document.createElement('div');
    headline.textContent = headline_text;
    card.appendChild(headline);
    headline.classList.add('headline');
    //create details
    const details = document.createElement('div');
    details.textContent = details_text;
    card.appendChild(details);
    details.classList.add('details');
    //create wrapper for publisher and date
    const wrapper = document.createElement('div');
    card.appendChild(wrapper);
    wrapper.classList.add('wrapper');
    //create publisher
    const publisher = document.createElement('div');
    publisher.textContent = publisher_text;
    publisher.classList.add('publisher');
    wrapper.appendChild(publisher);
    //create separation dot
    const dot = document.createElement('div');
    dot.textContent = '•';
    wrapper.appendChild(dot);
    //create date
    const date = document.createElement('div');
    date.textContent = date_text;
    date.classList.add('date');
    wrapper.appendChild(date);
}

/*Test card*/
// const card = document.querySelector('.card');

// card.addEventListener('click', () => {
//     console.log('im clicked!');
//     url = 'https://google.com'
//     window.open(url, '_blank').focus();
// });
