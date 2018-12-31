$(document).ready(() => {
    console.log('jQ Connected');
  
  const fetchBackgroundImage = () =>{
      const url="https://api.unsplash.com/photos/random/?client_id=ac3220c0b2b2e79afea2931d88085e3921bf59a8c915cbb4f3a793cd31bc9d21";
  
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // handleBackgroundImage(data)
        renderBackgroundImage(data.urls.regular);
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })
  
    }

    // const handleBackgroundImage = (ImageData) => {
    //     renderBackgroundImage(ImageData.urls.full)
    // }

    const renderBackgroundImage = (ImageUrl) => {
        $('body').css('background-image' , `url(${ImageUrl})`);
    }
    fetchBackgroundImage();


    const fetchWeather = () =>{
        const url="http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=a9bfdaae31fa1aa7f7e9d30d888b7ca7";
    
      fetch(url)
      .then(response => response.json())
      .then(data => {
          // handleWeather(data)
          renderWeather(data);
          console.log(data)
      })
      .catch(error => {
          console.log(error);
      })
    
      }
  
      const renderWeather = (data) => {
          const $temp = $('<p>');
          const $city = $('<p>');
          $temp.text(data.main.temp + " ْC ");
          $city.text(data.name);
          $('.weather').append($temp , $city);
      }
      fetchWeather();

            const fetchQuote = () =>{
                const url="https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
            
            fetch(url)
            .then(response => response.json())
            .then(data => {
                renderQuote(data);
                console.log(data)
            })
            .catch(error => {
                console.log(error);
            })
            
            }
        
            const renderQuote = (data) => {
                const $quote = $('<p>');
                const $author = $('<p>');
                $quote.text('"' + data.quoteText + '"').addClass('quote');
                $author.text("-" +data.quoteAuthor).addClass('author');
                $('.quote').append($quote , $author);
            }
            fetchQuote();

            const $time = $('<h1>');
            $time.text(`${moment().format('LTS')}`).addClass('time');
            $('.main').append($time);

            const $greeting = $('<h3>');
            $greeting.text("Hello Noorah").addClass('greeting')
           $('.main').append($greeting);

          
  })