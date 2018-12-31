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

    function getNewQuote() {
        $.ajax({
          url: 'http://api.forismatic.com/api/1.0/',
          jsonp: 'jsonp',
          dataType: 'jsonp',
          data: {
            method: 'getQuote',
            lang: 'en',
            format: 'jsonp'
          },
          success: function(response) {
            quote = response.quoteText;
            $('#quote').text(response.quoteText);
            if (response.quoteAuthor) {
              $('#author').text('said by ' + response.quoteAuthor);
            } else {
              $('#author').text('- unkown');
            }
          }
        });
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
    getNewQuote();

    $('body').css('color', 'white');
});