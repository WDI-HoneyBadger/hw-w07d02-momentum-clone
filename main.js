$(document).ready(() => {
    console.log("you are beautiful")

    //  Unsplash API 
    const fetchBackgraundImage = () => {
        const url = 'https://api.unsplash.com/photos/random/?client_id=1cd5576c18f165821f3bcf76afaecc3d33190a725cc96de1fa73f8bbfa6ed3aa'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // handelBackgraundImage(data)
                renderBackgraundImage(data.urls.regular)
            })
            .catch(error => {
                console.log(error);
            })
        const renderBackgraundImage = (imageUrl) => {
            ($('body').addClass('bg')).css('background-image', `url(${imageUrl})`)
        }
    }
    //  Open Weather API
    fetchCurrentWeather = () => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=e6ed8d551a8b3f095477b7bd887962a0'
        fetch(url)
            .then(response => response.json())
            .then(data => { renderCurrentWeather(data) })
            .catch(error => { console.log(error); })


        const renderCurrentWeather = (weathers) => {
            const $newp = $('<div>')
            const $divc = $('<div>').addClass('divc')
            const $temp = $('<h2>')
            const $icon = $('<img>')
            const $name = $('<h4>')


            $temp.text((weathers.main.temp) + '°')
            $name.text(weathers.name);
            //bounse
            $icon.attr('src', 'http://openweathermap.org/img/w/' + weathers.weather[0].icon + '.png')

            $divc.append($icon)
            $divc.append($temp)


            $newp.append($divc)
            $newp.append($name)


            $('.weather1').append(($newp.addClass('weather')))
        }
    }


    //Forismatic API 
    fetchQuote = () => {
        const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
        fetch(url)
            .then(response => response.json())
            .then(data => { renderquoteData(data) })
            .catch(error => { console.log(error); })

        const renderquoteData = (quotes) => {
            const $quotetext = $('<h1>')

            $quotetext.text(quotes.quoteText).addClass('quote');
            console.log(quotes.quoteText)

            $('.quotes').append($quotetext)
        }
        // momentome
        const time = $('<h1>').addClass('time').text(moment().format('LT'));
        $('.times').append(time)

        const today = new Date()
        const curHr = today.getHours()

        if (curHr < 12) {
          return   $('<h5>').addClass('time1').text('Good Morning').appendTo('.times')
        } else if (curHr < 18) {
          return   $('<h5>').addClass('time1').text('Good Afternoon').appendTo('.times')
        } else {
          return   $('<h5>').addClass('time1').text('Good Evening').appendTo('.times')
        }
        


    }


    fetchCurrentWeather()
    fetchBackgraundImage()
    fetchQuote()
})