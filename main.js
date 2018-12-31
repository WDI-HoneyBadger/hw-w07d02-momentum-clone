$(document).ready(() => {
    console.log('jQ Connected');

    const icons = {
        clear: '☀',
        rain: '️🌧',
        storm: '⛈',
        snow: '🌨',
        mist: '🌫',
        clouds: '☁',
      };

    const fetchBackgroundImage = () => {
        const url = 'https://api.unsplash.com//photos/random/?client_id=6bdd8e184f2b6d0db15fea48d0fc9f341129cc5cf1b332bc39a16b072fa88263';

       fetch(url)
        .then(response => response.json())
        .then(data => {
            renderBackgroundImage(data.urls.regular); 
        }) 
        .catch(error => {
            console.log(error);
        })

    }

    const fetchWeatherData = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=51dd9e9ad7e916d691e13198b0573be0';

       fetch(url)
        .then(response => response.json())
        .then(data => {
            renderWeatherData(data); 
        }) 
        .catch(error => {
            console.log(error);
        })
    }

    const fetchRandomQuote = () => {
        const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

       fetch(url)
        .then(response => response.json())
        .then(data => {
            renderRandomQuote(data); 
        }) 
        .catch(error => {
            console.log(error);
        })
    }

    const renderBackgroundImage = (imageUrl) => {
        $('body').css('background-image', `url(${imageUrl})`);
    }

    const renderWeatherData = (WeatherData) => {
        let icon = '';
        let weatherstate = WeatherData.weather[0].main.toLowerCase();

        if (weatherstate === 'clear') {
            icon = icons.clear;
        } else if (weatherstate === 'rain') {
            icon = icons.rain;
        } else if (weatherstate === 'storm') {
            icon = icons.storm;
        } else if (weatherstate === 'snow') {
            icon = icons.snow;
        } else if (weatherstate === 'mist') {
            icon = icons.mist;
        } else {
            icon = icons.clouds;
        }

        $('<p>').text(icon+' ' + WeatherData.main.temp+' C').addClass('temp').appendTo($('.main'));
        $('<p>').text(WeatherData.name).addClass('city').appendTo($('.main'));
    }

    const renderRandomQuote = (randomQuote) => {
        $('<p>').text('"'+randomQuote.quoteText+'"').addClass('quote').appendTo($('.main'));
        $('<p>').text('- '+randomQuote.quoteAuthor).addClass('quoteAuthor').appendTo($('.main'));
    }

    $('<p>').text(moment().format('LT')).addClass('time').appendTo($('.main'));
    $('<p>').text('Hello, Moroj').addClass('name').appendTo($('.main'));
    
    fetchBackgroundImage();
    fetchWeatherData();
    fetchRandomQuote();
})