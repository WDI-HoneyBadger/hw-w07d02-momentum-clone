# Momentum Clone - Lab/Homework


## Spec:
Today we're building a clone of the popular chrome homepage extension, [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en).

![](https://git.generalassemb.ly/wdi-nyc-8-28/momentum-lab/blob/master/momentum_spec.png)



## Part1:  Get The Data 

Don't get too deep into CSS for this part!  The goal for part 1 is to just get the data you need from the API's.  You'll do styling in part 2.

If you want to change the font color to white, or the background image to the right size that's fine.



1. Use the [Unsplash API](https://unsplash.com/) to get a random photo for the background image.  Read the docs to determine the right endpoint to do this.  Once you have the response data inspect the object.  Which part of the data do you think would be helpful for what we need here?  Remember, our goal here is to set the background of our site to a random image.  When you find what you need, write a function that sets the background image of our site to the random image from the API. 
    > Note that unsplash does have a limit of 50 hits per hour. Once you have this feature done, consider commenting out the fetch call so you don't make fetches while working on other features.

    > Also note that your CORS chrome extension will need to be on for it to work!
2.  a.   Use the [Open Weather API](http://api.openweathermap.org) to get the current weather.  You'll need to sign up for an account and get an API key. 
   
    b.  Figure out how to get the right data!  We want to use this API to get the current temperature in Riyadh.  Spend 15 minutes reading [the docs](https://openweathermap.org/current) and using Postman to figure out how to get the current temperature in Riyadh from this API.  Reading documentation to figure out how to access data is an important skill, try and give it your best shot!
   
    If you can't figure out how to do this in 15 minutes, the answer is below.
  
    <details>
    <summary><strong><< click here after you've tried for 15 minutes!</strong></summary>

    This is the endpoint needed to get the data:


    > http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=REPLACETHISWITHYOURID

    </details>

    c.  Now that you have the data, append that data to your page.
   
3. Use the [Forismatic API](https://forismatic.com/en/api/) to get a random quote for the bottom of the page.  You do not need a unique key for this.  You are probably supposed to, but I have found that the key used in the examples from the docs works just fine.  Read the docs to determine how to get a random quote.  When you have the random quote, append the quote to do the DOM.
4. Use [Moment](http://momentjs.com/) to render a time.  Moment is not an API, it's a library for time.  Paste this CDN to the header of your html to gain access to the Moment library in your app: 
  `<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"></script>`. 
  Now in your main.js file put this in there: `console.log(moment().format('LTS'))`.  Look, you have the time!  Append this time to the html page to finish the app.  Reading the docs may be helpful for context.





## Part 2 - Style it!
Now that we have all the data we need, add CSS!  To do this you'll have to go into your javascript and add classes or Id's to your code (don't remember how?  [Here](https://api.jquery.com/addclass/) are the jQuery docs for adding classes).  You'll also have to add a `style.css` file, link it your `index.html`, then add styles!

Some styling suggestions:
1.  The background image is too big!  Resize the background image so you can see the whole thing in the frame.
2.  Center the time and make it larger!  Change the font size and color appropriately
3.  Move the temperature to the top right corner.  Change the font size and color appropriately 
4.  Move the random quote to the bottom of the page.  Change the font size and color appropriately.

Add any other minor details you see.



## Bonus:
1. Look at the spec, do you see that little icon next to the temperature? Below there is an object with icons you can use for this. Add the appropriate icon next to the temp.  If the API says it's sunny, there should be a sun, clouds if it is cloudy, etc.
```js
const icons = {
  clear: '☀',
  rain: '️🌧',
  storm: '⛈',
  snow: '🌨',
  mist: '🌫',
  clouds: '☁',
};
```
2. What is an API?

