$('document').ready(() => {
  console.log('jQ connected!');

      const fetchBackgroundImage = () => {
          const url = "https://api.unsplash.com/photos/random/?client_id=a43fe96268e7fa6a44ef646679c6ba25c3dd0807840c9da16c95a7f5b31dcdbc";
          fetch(url)
          .then((response) =>  response.json())

          .then((data) => {
              console.log(data.urls.full);
              renderBackground(data.urls.regular);
          })
          .catch((error) => {
              console.log(error);
          })
      }

      const fetchWeather = () => {
          const url = "https://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=893ce18b746af898f5a5026204e9d002";
          fetch(url)
          .then((response)=> response.json())
          .then((data) => {
              
              renderWeather(data.main.temp);
          })
          .catch((error) => console.log(error));
      }
          const fetchQuote = () => {
              const quote = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
              fetch(quote)
              .then((response) => 
              response.json())
              .then((data) => {
          
                  renderQuote(data)
              })
              .catch((error) => 
              console.log(error));
          };

      fetchQuote();
      fetchWeather();
      fetchBackgroundImage();

          const renderBackground = (imageurl) =>{

              $('body').css('background-image' , `url(${imageurl})`);
          }

          const renderWeather = (temp) => {
              const $weatherDiv = $('<div>');
              $weatherDiv.addClass("weather")

             $('<div>').html(temp + 'c').appendTo($container);

              $('body').append($container);
          }

          const renderQuote = (quote,author) => {
              const $Quotecontainer = $('<div>');
              $Quotecontainer.addClass("quote")
           $('<p>').html(quote).appendTo($Quotecontainer);
              $('<p>').html(author).appendTo($Quotecontainer);



              $('body').append($container);
          } 

          const renderMoment = () => {
              const $momentDiv = $('<div>');
              $momentDiv.addClass("moment");
              const $time = $('<h2>').text(moment().format('LTS')).appendTo($momentDiv);
              $("<p>").text("Welcome").appendTo($momentDiv);


              $('body').append($container);
          }

          renderMoment();
          fetchBackgroundImage();
    fetchWeather();
    fetchQuote();


});