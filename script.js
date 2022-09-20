let image_source = [];

fetch('https://newsdata.io/api/1/news?apikey=pub_1145725872fd78d5a00ae0ad5fc25d8f4c3b4&language=en', {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {

    console.log(response);
    console.log(response.results.length);

    for(let i=0; i<response.results.length; i++){
        if(response.results[i].image_url === null) {
            image_source[i] = 'images/faker_thumb.png';
        } else {
            image_source[i] = response.results[i].image_url;
        }
        createCard(image_source[i], response.results[i].title, response.results[i].description, response.results[i].creator, response.results[i].pubDate);
    }
    console.log(image_source);
    }).catch((error) => console.log(error));
    



let createCard = (image_source, headline_text, details_text, publisher_text, date_text) => {
    const content = document.querySelector('.content');
    //create card
    const card = document.createElement('div');
    content.appendChild(card);
    card.classList.add('card');
    //create image
    const img = document.createElement('img');
    img.src = image_source;
    card.appendChild(img);
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