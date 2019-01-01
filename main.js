
$(document).ready(() => {
    console.log('jQ Connected');
  
    const fetchBackgroundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=741e565c4a3d04e1c7f2e488615fd0594777c8e55c26e507d51d40b376411895';
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          //console.log( "data:"  ,data);
          renderBackgroundImage(data.urls.regular);
        })
        .catch(error => {
          console.log(error);
        })
    }


    const renderBackgroundImage = (imageUrl) => {
      $('body').css('background-image', `url(${imageUrl})`);
    }


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










    const fetchWeather = ()=> {
        const url='http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=ad60f32cd784eaf9e16e2ce25d3859c2';
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data.main.temp);
            renderWeather(data)
            // renderWeather(data.main.temp)
            .catch(error => {
                console.log(error);
              })
        })
    const renderWeather = weatherStatus => {
        const $wether = $('<div>');
        const $temprtaur = $('<h3>').text (weatherStatus.main.temp+' °C'+ '- ' + weatherStatus.name);
        $wether.append($temprtaur);
        $('body').append($wether);
        // $('body').append($temprtaur);

    }
    
    
    
    
    }
    console.log(moment().format('LTS'))
    fetchBackgroundImage();
    fetchWeather();
    fetchQuote();
  
  })





