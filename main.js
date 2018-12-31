$(document).ready(() => {
    console.log('jQ Connected');
  
    const fetchBackgroundImage = () => {
      const url = 'https://api.unsplash.com/photos/random/?client_id=9c669d1afdaea3a9f9d5f0a67309d1ef452eafd3938f675dedd1f9ea429d7234';
  
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
  


// scound 

const fetchWeather = () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Riyadh,SA&units=metric&APPID=11ee50a4b11c68cd7ab7fc4025a4a2ac';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
       let  dataNew = data.main;
       let tempData = dataNew.temp;
       console.log(tempData);
        renderWeather(tempData);
      })
      .catch(error => {
        console.log(error);
      })
  }


  const renderWeather = (tempData) => {
    const $newTemp = $('<div>');
    const $temp = $('<h3>');

    $temp.text(tempData);

    $newTemp.append($temp);
    $('body').append($newTemp);
    
  }


//thired 
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
    const $newQuote = $('<div>');
    const $quote = $('<p>');

    $quote.text(quote);

    $newQuote.append($quote);
    $('body').append($newQuote);
    
  }
  console.log(moment().format('LLLL'));
  console.log(moment().format('LTS'));
  let dataMoment = moment().format('LLLL');
  const $newMoment = $('<div>');
    const $dataMoment = $('<h2>');
    $dataMoment.text(dataMoment);
    $newMoment.append($dataMoment);
    $('body').append($newMoment);

//   fetchBackgroundImage();
  fetchWeather();
 fetchQuotes();
  
  })