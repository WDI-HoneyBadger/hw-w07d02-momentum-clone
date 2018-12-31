$(document).ready(()=>{

    console.log("JQ connected")

    const fetchBackgroundImage = () =>{
        const url = 'https://api.unsplash.com/photos/random/?client_id=b0e1a9bbaf0f9a5a02e74ed2884a274cae288d0e35c67958c44e9b82dd11aa4e';
        fetch(url)
        .then(response => response.json()) 
        .then(data =>{
            console.log(data);
            // handleBackgroundImage(data);
            renderBackgroundImage(data.urls.full)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    const renderBackgroundImage = (imageUrl => {
        $('body').css('background-image',`url(${imageUrl})`);
        
    })
    
    const handleBackgroundImage = (imageData =>{
        // console.log(imageData.urls.full);
        renderBackgroundImage(imageData.urls.full);
    })
    fetchBackgroundImage();

    const fetchBackgroundWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=107eb85fd837d4501cf5d60f254d18b9';
        fetch(url)
        .then(response => response.json()) 
        .then(data =>{
            console.log(data);
            renderBackgroundWeather(data.main.temp)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const renderBackgroundWeather = (weather => {
        const $temp = $('<p>');
        $temp.text(weather);
        $('body').append($temp);
        
    })

    fetchBackgroundWeather();
    
    const fetchWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=9d8b93a64699c17d4d9462c9377a734f';
        fetch(url)
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
        const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#';

        fetch(url)
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


    const renderQuote = (quote => {
        const $container = $('<div>').addClass('quote').appendTo($('.page'));
        const $quote = $('<h3>').text(quote.quoteText).appendTo($container);
        const $author = $('<h4>').text(quote.quoteAuthor).appendTo($container);
    }) 

    const renderTime = () => {
        const $container = $('<div>').addClass('time').appendTo($('.page'));
        const $time = $('<h1>').text(moment().format('LTS')).appendTo($container);
        const $name= $('<h3>').text('Hello Hanan').appendTo($container);
    }


    fetchWeather();
    fetchQuote();
    renderTime();


})