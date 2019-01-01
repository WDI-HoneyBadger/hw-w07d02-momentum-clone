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
        const url = 'https://api.unsplash.com/photos/random/?client_id=bf726ad2aa870aa91164fbc751e9056c0aedad583ed6dbaee253cb15020eb689';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                //   console.log(data);
                renderBackgroundImage(data.urls.regular);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const fetchWeather = () => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=0093f5c9f9847f340d4ffb453c1a258d';

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                handleWeather(data);
            })
            .catch((error) => console.log(error))
    }

    const fetchQuote = () => {
        const url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                renderQuote(data);
            })
            .catch(error => {
                const myQuote = {
                    quoteText: "The man who passes the sentence should swing the sword.",
                    quoteAuthor: "Eddard Stark"
                }
                renderQuote(myQuote);
                console.log(error)
            })
    }



    const handleWeather = (weatherData) => {
        let icon = "☁"
        switch (weatherData.weather[0].main) {
            case "Clear": icon = icons.clear;
                break;
            case "Rain": icon = icons.rain;
                break;
            case "Storm": icon = icons.storm;
                break;
            case "Snow": icon = icons.snow;
                break;
            case "Mist": icon = icons.mist;
                break;
            case "Clouds": icon = icons.clouds;
                break;
        }


        renderWeather((weatherData), icon);
    }

    const renderBackgroundImage = (imageUrl) => {
        $('body').css('background-image', `url(${imageUrl})`);
    }

    const renderWeather = (weatherData, icon) => {
        const $weatherDiv = $("<div>").addClass("weather").prependTo("body");
        $("<p>").text(`${icon} °${weatherData.main.temp - 273.15}C`).appendTo($weatherDiv);
        $("<p>").text(weatherData.name).appendTo($weatherDiv);
    }

    const renderQuote = (quoteData) => {
        if (quoteData.quoteAuthor == "") quoteData.quoteAuthor = "Unknown Wise Ass"
        const $quoteDiv = $("<div>").addClass("quote").appendTo("body");
        $("<h3>").text(`"${quoteData.quoteText}"`).appendTo($quoteDiv);
        $("<p>").text(`-${quoteData.quoteAuthor}`).appendTo($quoteDiv);
    }

    const renderMoment = () => {
        const currentMoment = moment().format('LTS');
        const $momentDiv = $("<div>").addClass("moment").appendTo("body");
        $("<h1>").text(currentMoment).appendTo($momentDiv);
        $("<p>").text("Good day, Raed").appendTo($momentDiv);
    }

    const updateMoment = () => {
        $(".moment>h1").text(moment().format('LTS'))
    }


    fetchBackgroundImage();
    fetchWeather();
    fetchQuote();
    renderMoment();
    setInterval(() => {
        updateMoment();
    }, 1000);

    console.log(typeof (moment().format('LTS')));

})