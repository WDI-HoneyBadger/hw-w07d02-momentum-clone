$(document).ready(() => {
    console.log('jQ Connected');
  
const fetchBackgroundImage = () => {
    const url = 'https://api.unsplash.com/photos/random?client_id=252f08ce216020f08b1e6fe6099b387fa16929de0303ba1bbd6f95626bd69df4'
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // handleBackGroudImage(data);
        renderBackgroundImage(data.urls.regular);
    })
    .catch(error => {
        console.log(error);

    })
}

const renderBackgroundImage = (imageUrl) => {
    $('body').css('background-image', `url(${imageUrl})`);
}

//   handleBackGroudImage = (imageData) => {
//       console.log(imageData.urls.full);
//   }



const fetchCurrentWeather = () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&APPID=786b8a5caa74509b4b55d700ba5c7efc'
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderCurrentWeather(main.temp)
    })
    .catch(error => {
        console.log(error);

    })

}

const renderCurrentWeather =(temp) => {
    $('<p>').text(temp).appendTo($('.main'));
}

const getRandomQuote = () => {
    const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    fetch()
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderQuote(data)
    }) 
    .catch(error => {
        console.log(error);
    })
}

const renderQuote = (quote) => {
    $('<p>').text(quote.quoteText).appendTo($('.main'));
}

//fetchBackgroundImage();
fetchCurrentWeather();
renderCurrentWeather();
getRandomQuote();
})