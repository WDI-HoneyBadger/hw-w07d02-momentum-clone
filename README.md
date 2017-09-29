# Momentum Clone


## Spec:
Today we're building a clone of the popular chrome homepage extension, [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en).




## Parts:

1. Use the [Unsplash API](https://unsplash.com/) to get a random photo for the background image.  Read the docs to determine the right end point to do this. 
2.  Use the [Open Weather API](http://api.openweathermap.org) to get the current weather.  You'll need to sign up for an account if you haven't already and get an API key.  Like the rest of the keys, store the key in your .env file. Use the endpoint: http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&APPID=${WEATHER_KEY}.  
3. Use the [Forismatic API](https://forismatic.com/en/api/) to get a random quote for the bottom of the page.  You do not need a unique key for this.  You are probably supposed to, but I have found that the key used in the examples from the docs works just fine.  Read the docs to determine how to get a random quote.
4. Use the npm package, [Moment](https://www.npmjs.com/package/moment) to render a time.  You can get the local time installing the package, requiring it, and then using the command: `moment().format('LT')`.


## Bonus:
1. Look at the spec, do you see that little icon next to the temperature?  You've been given a file called 'weather-icons.js' with a list of these icons.  Add the appropriate icon next to the temp.  If the API says it's sunny, there should be a sun, clouds if it is cloudy, etc.
2. Add save functionality to the random quote!  Create a new db and schema.  Add a button next to the quote that saves the quote to the db when clicked.
3. Add a view page to view all of the users saved quotes.
