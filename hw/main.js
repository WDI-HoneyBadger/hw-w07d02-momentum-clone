$(document).ready(() => {
  console.log('jQ connected!');

const fetchBackgroundImage = () => {
  const url = 'https://api.unsplash.com/photos/random/?client_id=8e70e936ffa3868af0df4857b315fff9447b908e837773b3921713ddeaf782ca';

  fetch(url)
      
  .then(response => response.json())
  .then(data => {
  console.log(data);
  renderBackgroundImage(data.urls.regular)

})
  .catch(error => {

    console.log(error);
})
};

const renderBackgroundImage = (imageUrl) => {

  console.log(imageUrl)

  $('body').css('background-image', `url(${imageUrl})`);

  };

  const fetchWeather = () => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=701759b1d18271fc4b575f09332e1c84';

  fetch(url)
   .then(response => response.json())
   .then(data => {
 console.log(data.main.temp);
 renderWether(data);
 
  }).catch(error => {
  console.log(error);
   })
  };

  const renderWether = (showWeather) =>{
    const $newdiv1 = $('<div>').css('float','right');
    const $newdiv2 = $('<div>').css('text-align','center').css("padding-top",'-30px');
    const $time = $('<h2>').addClass('time').text(moment().format('LTS'));
    const $new = $('<h1>').text(showWeather.main.temp+' fhrnite '+showWeather.name);
    $newdiv1.append($time);
    $newdiv2.append($new);
    $('body').append($newdiv1);
    $('body').append($newdiv2);



  }
  const tex = () => {
    const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
  
    fetch(url)
     .then(response => response.json())
     .then(data => {
   console.log(data.quoteText.quoteAuthor);
   renderText(data);
   
    }).catch(error => {
    console.log(error);
     })

  const renderText= (showText) =>{
    const $newdevsh = $('<div>');
    const $shwText = $('<h3>').addClass('shwText').text(showText.quoteText+" "+showText.quoteAuthor);
    $newdevsh.append($shwText);

    $('body').append($newdevsh);


  }

}
tex();

  fetchBackgroundImage();
  fetchWeather();

});