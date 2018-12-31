$(document).ready(() =>{
    console.log('jq connect');

        const fetchBackgroundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=517995fabedd50d719d34d5c722fec44a198be2fccfaa23cb2352b391112bacf';
       
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            renderBackgroundImage(data.urls.regular);
          })
          .catch(error => {
            console.log(error);
          })
        }
       const renderBackgroundImage = (imageUrl) => {
        $('body').css('background-image', `url(${imageUrl})`);
      }
    
      fetchBackgroundImage();
    
      const fetchWeather =()=>{
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=REPLACETHISWITHYOURID';
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let  New = data.main;
	      let temp = New.temp;
	       console.log(temp);
	        renderWeather(temp);
        })
        .catch(error => {
          console.log(error);
        })

      const renderWeather = (tempData) => {
	    const $newTemp = $('<div>').append($temp);
	    const $temp = $('<h3>').text(tempData);
	
	    $('body').append($newTemp);
      }
      const fetchQuotes = () => {
	    const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
	    fetch(url)
	      .then(response => response.json())
	      .then(data => {
	        console.log(data.quoteText);
	        renderQuotes(data.quoteText);
	      })
	      .catch(error => {
	        console.log(error);
	      })
      }
      
	    const renderQuotes = (quote) => {
	    const $newQuote = $('<div>').append($quote);
	    const $quote = $('<p>').text(quote);
	
        $('body').append($newQuote);
      }
        const renderMoment = () => {
        const $container = $('<div>').addClass('moment').appendTo($('body'));
        const $time = $('<h1>').text(moment().format('LTS')).appendTo($container);
    }
    fetchWeather();
    fetchQuotes();
    renderMoment();
    }});


