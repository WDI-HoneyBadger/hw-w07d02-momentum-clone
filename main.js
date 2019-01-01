$(document).ready(() =>{
    console.log('jQuery connected')
    const fetchBackgroundImage = () =>{
        const url='https://api.unsplash.com/photos/random?client_id=a835565f83786a9fc719b0c9ae8d816fc04b117a2dc48237ab0b2a2039e46c05';
    fetch(url)
    .then(response => response.json())
    .then(data =>{
       // handleBackgroundImage(data);
       renderBackgroundImage(data.urls.regular);
    })
    .catch(error =>{
        console.log(error);
    })
   /*  const handleBackgroundImage = ( imafeData)=>{
        console.log(imafeData.urls.full);
    } */
    const renderBackgroundImage=(imageUrl)=>{
        $('body').css('background-image', `url(${imageUrl})`);

    }
    }
    const fetchmyWeather=()=>{
        const url='http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=6096d9e4be91aaf9094b01a7bd37697d';
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data.main.temp);
            rendermyWeather(data.main.temp);
        })
        const rendermyWeather = displayWeather => {
            const $newDiv = $('<div>');
            const $newTemp = $('<h2>').text(displayWeather+' °C');
            $newDiv.append($newTemp);
            $('body').append($newDiv);
            
        }
        
        }
    console.log(moment().format('LTS'))


    fetchBackgroundImage();
    fetchmyWeather();
})
