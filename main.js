$(document).ready(()=>{

    console.log("Connected!")
  

    //Background setting
    const fetchBackGroundImage = () =>{

        const url = 'https://api.unsplash.com/photos/random?client_id=6dd769fef4b322ee72287c1f940af4f92239ae27efa1732756b28bc811db65ab';

        fetch(url)
        .then(response => response.json())
        .then(data => {

            renderBackgroundImage(data.urls.regular);
        })

        .catch(error => console.log("Error occured! ", error));

    }

    

    //Weather setting
    const fetchWeatherDegree =() =>{
        console.log(moment().format('LTS'))
        const url = "http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=677acf97a74e281e032bd0b19a100237";

        fetch(url)
        .then(response => response.json())
        .then(data => {

            renderWeatherDegree(data.main.temp, data.name);
        })

        .catch(error => console.log("Error occured! ", error));
    }


    //quotes setting

    const fetchQuote = () =>{

        const url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

        fetch(url)
        .then(response => response.json())
        .then(data =>{

           console.log(data.quoteText, data.quoteAuthor);
            renderQuotes(data.quoteText, data.quoteAuthor);
        })

        .catch(error => console.log("Error occured!", error));
    }

   fetchBackGroundImage();
    fetchWeatherDegree();
    fetchQuote();
})

// const handleBackGroundImage = (imageData) => {

    
// }

const renderBackgroundImage = (imageUrl) =>{

    $('body').css(`background-image`, `url(${imageUrl})`);

}

const renderWeatherDegree = (temp, city) =>{

    $('.div0').text(temp + " " + city);
    $('.div1').text(moment().format('LTS'));

}

const renderQuotes = (quote, author) =>{


   $('.div2').text(`${quote} \n ${author}`);
}

