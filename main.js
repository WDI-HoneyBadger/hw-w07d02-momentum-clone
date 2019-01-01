$(document).ready(() => {
    console.log('jQ Connected');

    const fetchBackgroundImage = () => {
        //accses key 
        const url = 'https://api.unsplash.com//photos/random/?client_id=64879dc6b5375c20a81ba91fe9a78a419f8eef52048adec08a0495f6bb195387';
       fetch(url)
        .then(response => response.json())
        .then(data => renderBackgroundImage(data.urls.regular))
        .catch(error => console.log(error))
    }
    const renderBackgroundImage = (imageUrl) => {
        $('body').css('background-image' , `url(${imageUrl})`);
    }
    
    //fetching Temperature
    const fetchTemperature = () => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=Riyadh,SA&units=metric&APPID=18ca002803f384c6e5344362a7e38e40';
        fetch(url)
        .then(response => response.json())
        .then(data => renderTheTemperature(data.main.temp))
        .catch(error => console.log(error))
    }
    const renderTheTemperature = (temperatureUrl) =>{
        const $cont = $('<div>')
        const $temperature = $('<h4>').text(temperatureUrl);

        $cont.append($temperature);
        $('body').append($cont);
    }

    const fetchQute = () =>{
        const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
        fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            console.log(data.quoteText);
            renderQute(data)})
        .catch((error) => console.log(error))
    }

    const renderQute = (getQuote) =>{
        $('<p>').text(getQuote.quoteText).addClass('quoteText').appendTo($('.continer'));
        $('<p>').text(getQuote.quoteAuthor).addClass('quoteAuthor').appendTo($('.continer'));
    }

    $('<p>').text(moment().format('LT')).addClass('time').appendTo($('.continer'));
    $('<p>').text('Good morning , munirah . Have a good day').addClass('name').appendTo($('.continer'));

    // const icons = {
    //     clear: '☀',
    //     rain: '️🌧',
    //     storm: '⛈',
    //     snow: '🌨',
    //     mist: '🌫',
    //     clouds: '☁',
    // };
    
    
    fetchQute();
    fetchTemperature();
    fetchBackgroundImage();
})