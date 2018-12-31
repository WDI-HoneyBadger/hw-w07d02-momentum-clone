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

        const fetchTemp = () => {
            const tempUrl = "https://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=893ce18b746af898f5a5026204e9d002";
            fetch(tempUrl)
            .then((response)=> response.json())
            .then((data) => {
                console.log(`Riyadh's weather:`,data.main.temp)
                renderTemp(data.main.temp);
            })
            .catch((error) => console.log(error));
        }
            const fetchQuote = () => {
                const urlQuote = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
                fetch(urlQuote)
                .then((response) => response.json())
                .then((data) => {
                    console.log( `quote: ` ,data.quoteText);
                    console.log( `Author: ` ,data.quoteAuthor);

                    renderQuote(data.quoteText,data.quoteAuthor)
                })
                .catch((error) => console.log(error));
            };

        fetchQuote();
        fetchTemp();
        fetchBackgroundImage();

            const renderBackground = (imageurl) =>{

                $('body').css('background-image' , `url(${imageurl})`);
            }
            
            const renderTemp = (temp,) => {
                const $container = $('<div>');
                $container.addClass("temp")
        
                const $temp = $('<div>').html(temp + 'c').appendTo($container);

                $('body').append($container);
            }

            const renderQuote = (quote,author) => {
                const $container = $('<div>');
                $container.addClass("quote")
                const $quote = $('<p>').html(`"` +quote +`"`).appendTo($container);
                const $author = $('<p>').html(`--` +author).appendTo($container);
                


                $('body').append($container);
            } 

            const renderTime = () => {
                const $container = $('<div>');
                $container.addClass("time");
                const $time = $('<h2>').text(moment().format('LTS')).appendTo($container);
                const $name = $('<h4>').text('Welcome Yahya . . ').appendTo($container);
               

                $('body').append($container);
            }

            renderTime();
            
});
