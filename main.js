$(document).ready(()=>{
    console.log('JQ is ready');


    const fetchBackGroundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=9be8de4578a8b57365c36ecee1f38d6bea04364761e7214d4ae0b0f1de5b991b';
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                renderBackGroundImage(data.urls.regular);
            })
            .catch(err => {
                console.log(err);
            })

    }


    const renderBackGroundImage = (imageUrl) => {
        $('body').css('background-image', `url(${imageUrl})`);

    }

    const fetchWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh,SA&units=metric&APPID=95e7d762db2901ee8a467411ab6c041c';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                renderWeather(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const renderWeather = (weatherTemp) => {
        
        const $container = $('<div>').addClass('weather').prependTo('.momentum');
        const $temp = $('<h4>').text(weatherTemp.main.temp).appendTo($container);
       
    }

    const fetchQuote = () => {
        const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                renderQuote(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const renderQuote = (quote) => {
        const $container = $('<div>').addClass('quote').appendTo('.momentum');
        const $quoteText = $('<p>').text(quote.quoteText).appendTo($container);
        const $quoteAuthor = $('<p>').text(quote.quoteAuthor).appendTo($container);
    }

    const renderMoment = () =>{
        const $container = $('<div>').addClass('moment').appendTo('.momentum');
        const $time = $('<h1>').text(moment().format('LTS')).appendTo($container);
        const $welcome = $('<h4>').text('Good Day! May').appendTo($container);
    }



    fetchBackGroundImage();
    fetchWeather();
    fetchQuote();
    renderMoment();

    //dont write after this point
})