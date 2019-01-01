$(document).ready(()=>{
console.log('JQuery is connected')



const fetchBackgroundImage=()=>{
const url = 'https://api.unsplash.com/photos/random/?client_id=1d4b0586207a48732ed09928e03b002308bac9d95479796e161a91ab4f9701cf';


 fetch(url)
.then(response=> response.json())
.then(data=>{
console.log(data);
renderBackgroundImage (data.urls.regular)
})
.catch(error=>{
console.log(error)
})

}
const renderBackgroundImage = (imageUrl) => {
    $('body').css('background-image', `url(${imageUrl})`);
  }
//----------------------

const fetchWeather =()=>{
    const url ='http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=7375257e9cbb8c0b3aad72599de08284';


    fetch(url)
    .then(response=>response.json())
    .then(data=>{
    console.log(data);
    renderCurrentWeather(data.main.temp)
    })
    .catch(error=>{
        console.log(error)
    })
}
const renderCurrentWeather=(currWeather) =>{
    $('body').append(`Weather(${currWeather})`)
}
//-------------------------

const fetchQuotes =()=>{
    const url = 'http://api.forismatic.com/api/1.0/method=getQuote&key=457653&format=xml&lang=en ';

    fetch(url)
    .then(response=>response.json())
    .then(data=>{
    console.log(data);
    renderQuotes();
    })
    .catch(error=>{
        console.log(error)
    })   
}
const renderQuotes=(rendquote)=>{
    $('body').append($rendquote)
}
//-----------------
const renderTime=()=>{
    $('body').append(moment().format('LTS'))
}
console.log(moment().format('LTS'))


  fetchBackgroundImage();
  fetchWeather();
  fetchQuotes();
  renderTime();

})
