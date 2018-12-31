$(document).ready(() => {
    console.log('jQ connected!');

    const fetchBackgroundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=f3d964b84ed2efea56b5e04861a81c05d96559192ab7b72fd12aefae695d74d4';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                renderBackgroundImage(data.urls.regular)
            }).catch(error => {
                console.log(error);
            })
    };

    const renderBackgroundImage = (imageUrl) => {
        console.log(imageUrl)
        $('body').css('background-image', `url(${imageUrl})`);

    };

    const fetchQuote = () => {
        fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        .then(response => response.json())
            .then(data => {
                renderQuote(data)
            }).catch(error => {
                console.log(error);
            })  
    };

    const renderQuote = quote => {
        const $newDiv = $('<div>');
        const $quoteText = $('<h2>').addClass('quoteText').text(quote.quoteText+' - '+quote.quoteAuthor);
        $newDiv.append($quoteText).css({
            'left': '0',
            'bottom': ' 0',
            'margin': '50px 0',
            'padding':'0',
            'text-align': 'center'
        }) ;
        $('body').append($newDiv)
    }

    const fetchWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=701759b1d18271fc4b575f09332e1c84';

        fetch(url)
        .then(response => response.json())
            .then(data => {
                console.log(data);
                renderWeather(data);
            }).catch(error => {
                console.log(error);
            })
    };

    const renderWeather = displayWeather => {
        const $newDiv = $('<div>').css({
            'text-align': 'center',
            'padding-bottom': ' 200px' 
        }) ;
        const $newDiv2 = $('<div>').css({
            'text-align': 'center',
            'padding-bottom': ' 500px'
            /* 'width': '500px',
            'margin':'0 auto',
            'text-align':'left',
            'padding':'15px ' */
        }) ;
     
        const $time = $('<h2>').addClass('time').text(moment().format('LTS'));
        const $newTemp = $('<h2>').text(displayWeather.main.temp+' °C'+ '- '+displayWeather.name);
        $newDiv.append($newTemp);
        $newDiv2.append($time);
        $('body').append($newDiv);
        $('body').append($newDiv2);
    }

    fetchBackgroundImage();
    fetchWeather();
    fetchQuote();

    $('body').css('color', 'white');
});