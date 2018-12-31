$(document).ready(() => {
    console.log('jq connected');

    const icons = {
        clear: '☀',
        rain: '️🌧',
        storm: '⛈',
        snow: '🌨',
        mist: '🌫',
        clouds: '☁',
      };

    const fetchBackgroundImage = () => {
        const url = `https://api.unsplash.com/photos/random/?client_id=34612cc166b2154a8eb8528b89c88fbba3c4a49e1e9eac849a14668c04934204`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            //we use handle if we have array of objects
            //  handleBackgroundImage(data);
            renderBackgroundImage(data.urls.regular);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const fetchWeather = () => {
        const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=9d8b93a64699c17d4d9462c9377a734f';

        fetch(weatherUrl)
            .then((response) => {
                console.log(response);
               return response.json()
            })
            .then((data) => {
                console.log(data);
                renderWeather(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const fetchQuote = () => {
        const quoteUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#';

        fetch(quoteUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                renderQuote(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // const handleBackgroundImage = (data) => data.urls.forEach(renderBackgroundImage);

    const renderBackgroundImage = (imgUrl) =>{
       $('body').css({"background-image": `url(${imgUrl})`})
    }

    const renderWeather = (temObject) => {
        let icon = '';
        temObject.weather[0].main == 'Clear'? icon = icons.clear
            : temObject.weather[0].main == 'Clouds'? icon = icons.clouds
            : temObject.weather[0].main == 'Rain'? icon = icons.rain
            : temObject.weather[0].main == 'Mist'? icon = icons.mist
            : temObject.weather[0].main == 'Storm'? icon = icons.storm
            : temObject.weather[0].main == 'Snow'? icon = icons.snow : icon = "";
        const $container = $('<div>').addClass('weather');
        const $temp = $('<h4>').text(icon + " " + temObject.main.temp +' \xB0 C').appendTo($container);
        const $city = $('<h5>').text(temObject.name + ', ' + temObject.sys.country).appendTo($container);
        $('.show').prepend($container);
    }

    const renderQuote = (quote) => {
        const $container = $('<div>').addClass('quote').appendTo($('.show'));
        const $quote = $('<h3>').text(quote.quoteText).appendTo($container);
        const $author = $('<h4>').text(quote.quoteAuthor).appendTo($container);
        const $link = $('<a>').text("Click Here!").attr('href', `${quote.quoteLink}`).appendTo($container);
    }

    const renderTime = () => {
        const $container = $('<div>').addClass('time').appendTo($('.show'));
        const $time = $('<h1>').text(moment().format('LT')).appendTo($container);
        const $myName= $('<h3>').text('Good Evening, Sultan').appendTo($container);
    }
    
    fetchBackgroundImage();
    fetchWeather();
    renderTime();
    fetchQuote();

})