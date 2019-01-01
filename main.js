$(document).ready(()=>{

    console.log("JQ connected")

    const fetchBackgroundImage = () =>{
        const url = 'https://api.unsplash.com/photos/random/?client_id=9091b8de0f0f998c238a0afbd1282fa624f269a03af8606e35394ca0f22087c2';
        fetch(url)
        .then(response => response.json()) // when we make it on one line we donn'y need to write return
        .then(data =>{
            console.log(data);
            // handleBackgroundImage(data);
            renderBackgroundImage(data.urls.regular)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    const renderBackgroundImage = (imageUrl => {
        $('body').css('background-image',`url(${imageUrl})`);
        
    })
    
    // const handleBackgroundImage = (imageData =>{
    //     // console.log(imageData.urls.full);
    //     renderBackgroundImage(imageData.urls.full);
    // })
    const fetchWeather = () =>{
        
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=7e319bfee670f8b1f1af3e58048597e5';
        fetch(url)
        .then(response =>response.json())
        .then(data =>{
            console.log(data);
            renderWeather(data.main.temp)
        })
        .catch(error =>{
            console.log(error)
        })
    
    }

    const renderWeather = (weather =>{
        const $temp = $('<p>');
        $temp.text(weather);
        $('body').append($temp);
   
    })

    const fetchQuote = () =>{
        const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
        fetch(url)
        .then(response =>response.json())
        .then(data =>{
            console.log(data);
            renderQuote(data.quoteText);
        })
        .catch(error =>{
            console.log(error)
        })
    
    }
    const renderQuote = (quote =>{
        const $quote = $('<p>');
        $quote.text(quote);
        $('body').append($quote);
    })
    const time = ()=>{
        console.log(moment().format('LTS'));
        const $time = $('<h1>');
        $time.text(moment().format('LTS'));
        $('body').append($time);
    }
    time();
    fetchWeather();
    fetchQuote();
    fetchBackgroundImage();


})
