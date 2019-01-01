$(document).ready(() => {
    //console.log('jQ Connected');

    const fetchBackgroundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=2c4d10fda1cf8c04352524f6a43e64be473e3fa9dc8fd194413eea2b4eed99bd'

        fetch(url)
            .then(response => response.json())
            .then(data => {
                renderBackgroundImage(data.urls.regular);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleBackgroundImage = (imageData) => {
        console.log(imageData.urls.regular);
    }

    const renderBackgroundImage = (imageUrl) => {
        $('body').css('background-image', `url(${imageUrl})`);
    }

    const fetchCityWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=ba12554b5e959f6882661cb8859f5567'
        fetch(url)
            .then(response => response.json())
            .then(data => {



                console.log(data.main.temp);
                renderCityWeather(data.main.temp);
            })
            .catch(error => {
                console.log(error);
            })



    };

    const renderCityWeather = () => {

    }




    const fetchQuote = () => {
        const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                renderQuote(data.quoteText, data.quoteAuthor);
                console.log(data.quoteText, data.quoteAuthor);
                
                //renderQuote(quoteAuthor);
            })
            .catch(error => {
                console.log('QuoteError:', error);

            })
        const renderQuote = (data) => {
            const $quote = $('<div>').addClass('quote').appendTo($('body'));
            const $text = $('<p>').text(`"${data.quoteText}`).appendTo($('qoute'));
            const $Author = $('<h5>').text(`"${data.quoteAuthor}`).appendTo($('qoute'));
        }

        //$('.quots').appendTo('<div> </div>')
        //$('<div>Quote</div>').appendTo


    };


    fetchCityWeather();
    fetchBackgroundImage();
    fetchQuote();
});