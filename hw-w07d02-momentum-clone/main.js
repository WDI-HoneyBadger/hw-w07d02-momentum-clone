$(document).ready(() => {
    console.log('jQ Connected');
  
    const fetchBackgroundImage = () => {
    const url = 'https://api.unsplash.com/photos/random/?client_id=379207e18ada5e96528a6336892076eea3b33885fe47afd3fd5a111184908787';
  
    fetch(url)
    .then(response => response.json())
    .then(data => {
          //console.log(data);
    renderBackgroundImage(data.urls.regular);
  })
    .catch(error => {
        console.log(error);
})
}
  
  
    const renderBackgroundImage = (imageUrl) => {
  $('body').css('background-image', `url(${imageUrl})`);
}

  const fetchWeather = () =>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=2286ef9147c86be5ad6d5e2c85691bdf';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.main.temp);
    renderWeather(data);
  })
    .catch(error => {
      console.log(error);
})
    
}
  const renderWeather = (displayWeather) => {
  const $newDiv = $('<div>').css(
      'float','right',
);
  const $weatherT = $('<h2>');
        
        
  $weatherT.text(displayWeather.main.temp+' °C ');
  $newDiv.append($weatherT);

  $('.body').append($newDiv);

  const $cityDiv = $('<div>').css(
    'float','right',
    'font-size', '10px'
);
  const $city = $('<h1>').text(displayWeather.name)

  $cityDiv.append($city)
  $('.body').append($cityDiv)
  addCity();
}
const renderTime = (displayTime) => {

const $newDiv2 = $('<div>');
const $timeNow = $('<h1>').text(displayTime)
    
$newDiv2.append($timeNow).css(
  'text-align','center',
  'margin-top','30px'
);;
        
$('.body').append($newDiv2);
} 
  const fetchQuote = () =>{
  const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
renderQuoteText(data);
})
  .catch(error => {
    console.log(error);
})
  const renderQuoteText  = (displayQuote) => {

  const $newDiv3 = $('<div>').css(
  'text-align', 'center'
);

  const $quoteText = $('<h2>').text(displayQuote.quoteText);
                
$newDiv3.append($quoteText);
        
$('.body').append($newDiv3).css(
'color','white'
  );
            
}}


renderTime(moment().format('MMMM Do YYYY, h:mm:ss a'));   
fetchWeather();
fetchBackgroundImage();
fetchQuote();
  })