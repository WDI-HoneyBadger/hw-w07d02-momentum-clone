$(document).ready(() => {
    console.log('jQ connected');
    // the set the background image

    const fetchBackgroundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=47f7b7c99571ee973e86a1718d7bcaaebee0e1b0375479628a7b0f171aabffe8'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // handelBackgroundImage(data);
                console.log(data);
                renderBackgroundImage(data.urls.regular);

            })
            .catch(error => {
                console.log(error);
            })
    }
    const handelBackgroundImage = (imageData) => {
        // renderBackgroundImage(imageData.urls.full);
    }
    const renderBackgroundImage = (imageUrl) => {
        $('body').css('background-image', `url(${imageUrl})`)
    }
    fetchBackgroundImage();
    handelBackgroundImage();
    
    // set the weather 

    const fetchCurrentWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=76a1a558003f7e09ab7594e310aadfcb'
        fetch(url)
            .then(response => response.json())
            .then(data => { renderCurrentWeather(data) })
            .catch(error => { console.log(error); })
    }

    const renderCurrentWeather = (weather) => {
        console.log("WEATHER", weather)
        const $weather = $('<div>');
        const $temp = $('<h1>');
        $temp.text(weather.main.temp + '°');
        $weather.append($temp);
        $('.weather').append($weather)
        console.log(weather);
    }

    fetchCurrentWeather();

    const renderTime = () => {

        const $time = $('<h1>')
        $time.text(moment().format('LTS'))
        console.log("TIME", $time)
        $('.times').append($time);
    
    }
    renderTime();

    const fetchQuote = () => {
        const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
        fetch(url)
            .then(response => response.json())
            .then(data => { renderQuoteData(data) })
            .catch(error => { console.log(error); })
            
        const renderQuoteData = (quotes) => {
            const $quotetext = $('<h2>')
            $quotetext.text(quotes.quoteText);
            console.log(quotes.quoteText)
    
            $('.qoutes').append($quotetext)
        }
    }

    fetchQuote();
})
 







console.log(moment().format('LTS'))