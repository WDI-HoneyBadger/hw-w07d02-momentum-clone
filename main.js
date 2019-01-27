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
        $('body').addClass('body').css('background-image', `url(${imageUrl})`);

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
        $newDiv.append($quoteText)
        $('body').append($newDiv)
    };
    const fetchWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=de601f137a5b9e31385c2ee6d540f0f4';

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
        const $newDiv = $('<div>').addClass('temp')
        const $newDiv2 = $('<div>').addClass('time')
     
        const $time = $('<h2>').text(moment().format('LTS'));
        const $newTemp = $('<h2>').text(displayWeather.main.temp+' °C'+ '- '+displayWeather.name);
        $newDiv.append($newTemp);
        $newDiv2.append($time);
        $('body').append($newDiv);
        $('body').append($newDiv2);
    };
    fetchBackgroundImage();
    fetchWeather();
    fetchQuote();

    $('body').css('color', 'black');
});