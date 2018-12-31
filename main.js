$(document).ready(() => {
    console.log('jQ Connected');
  
  
    const fetchBackgroundImage = () => {
const url = 'https://api.unsplash.com/photos/random/?client_id=cde7381df416f18b95c6ee9f2400ac7ab7d440c1f8cc424884b14ca9cb630ea7';

fetch(url)
.then(response => response.json())
.then(data => {
    renderBackgroundImage(data.urls.regular);
    // handleBackgroundImage(data);
   console.log(data)
})
.catch(error =>{
    console.log(error);
})

}
    

 const renderBackgroundImage = (imageUrl) => {
    $('body').css('background-image', `url(${imageUrl})`);
}


const fetchWeather = () => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=d119d44c1e59033a0096e4d5cbed97b3'
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderWeather(data.main.temp)
    })
    .catch(error => {
        console.log(error);
    })
}

const renderWeather = (weather => {
    const $temp = $('<p>');
    $temp.text(weather);
    $('body').append($temp);


   // const $description = $('<p>'); 
   // $description.text(weather.description);
   // $('body').append($description);

})
const fetchQuote = () => {
    const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'

    fetch(url)
    .then(response => response.json())
    .then(data => {
        renderQuote(data);
    })
    .catch(error => {
        console.log(error);
    })
}
const renderQuote = (qoute => {
    const $newDiv = $('<div>');
    const $h2 = $('<h2>');
    const $h3 = $('<h3>');

    $newDiv.appendTo('body');
    $h2.text(qoute.quoteText).append($newDiv);
    $h3.text(qoute.quoteAuthor).append($newDiv);
})


const renderTime = (time => {
    const $newDiv = $('<div>').addClass("time");
    const $time = $('<h2>');


$newDiv.appendTo('body');
$time.text(moment().format('LTS')).append($newDiv);

})


fetchBackgroundImage();
fetchWeather();
fetchQuote();
renderTime();



  })