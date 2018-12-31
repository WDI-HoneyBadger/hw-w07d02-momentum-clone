$(document).ready(() => {
    console.log('jQ connected!!');

    const $time = $('<div>').addClass("time").appendTo($('body'))
    $time.append(moment().format('LT'));

    const fetchBackgroundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=672c39f6b779530b50820778482b2631767207cd8ab1f2ed60411a9b1e51e462';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                renderBackgroundImage(data.urls.regular);
            })
            .catch(error => {
                console.log('*** fetchBackgroundImage Error *** ',error)
            })
    }

    const renderBackgroundImage = imgUrl => {
        $('body').css('background-image', `url(${imgUrl})`);
    }

    fetchBackgroundImage();

    const fetchTemp = () => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=Riyadh,ksa?&units=metric&appid=7ffd49cb02e6f7e14455ae1919e59d33';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                renderTemp(data);
            })
            .catch(error => {
                console.log('*** fetchTemp Error *** ',error)
            })
    }

    const renderTemp = temperature => {
        const $temp = $('<div>').addClass('temp').appendTo($('body'));

        $('<h3>').text(`${temperature.main.temp}°C`).appendTo($temp);
        $('<h5>').text(temperature.name).appendTo($temp);
    }

    fetchTemp();

    const fetchQuote = () => {
        const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                renderQuote(data);
            })
            .catch(error => {
                console.log('*** fetchQoute Error *** ',error)
            })
    }

    const renderQuote = qoute => {
        const $quote = $('<div>').addClass('quote').appendTo($('body'));

        $('<p>').text(`"${qoute.quoteText} "`).appendTo($quote);
        $('<p>').text(`-${qoute.quoteAuthor}`).appendTo($quote);

    }

    fetchQuote();

});