
$(document).ready(() => {
    console.log('jQ Connected');

    const fetchBackgroundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=aab05a46665a0d677b9550c630a29a85f2ddb191ea6383b87374b92329e685b8';

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                renderBackgroundImage(data.urls.regular);
            })
            .catch(error => {
                console.log(error);
            })
    }


    const renderBackgroundImage = (imageUrl) => {
        $('body').css('background-image', `url(${imageUrl})`);
    }



    const fetchWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=01c277731622cb4e2c8058fb4a5f62c1';
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                renderWeather(data.main.temp)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const renderWeather = (weather) => {
        const $temp = $('<p>');
        $temp.text(weather);
        $('body').append($temp);
    }

    const fetchQuote = () => {
        const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                // console.log(data);
                renderQuote(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const renderQuote = (quote) => {
        const $container = $('<div>').addClass('quote').appendTo('body');
        const $quote = $('<h1>').text(quote.quoteText).appendTo($container);
        const $author = $('<h2>').text(quote.quoteAuthor).appendTo($container);
       
    }
    const renderMoment = () => {
        const $container = $('<div>').addClass('moment').appendTo($('body'));
        const $time = $('<h1>').text(moment().format('LTS')).appendTo($container);
        const $Name= $('<h3>').text('Rawan').appendTo($container);
 
    }

fetchQuote();
fetchWeather();
fetchBackgroundImage();
renderMoment();

})
