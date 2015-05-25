# My HTML5BoilerPlate

This is a changed version of [HTML5BOILERPLATE](https://html5boilerplate.com/)

I have Customized it to quickly start any small projects with some usefull tools. Comes with:

* [Stylus](http://learnboost.github.io/stylus/) (with [nib](http://tj.github.io/nib/) that already comes with [normalize](http://necolas.github.io/normalize.css/))
* [JSHint](http://jshint.com/)
* [Jasmine](https://github.com/jasmine/jasmine)
* [Modernizr](http://modernizr.com/)
* [Grunt](http://gruntjs.com/)
* -- [Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
* -- [Cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* -- [Uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [JQuery](http://jquery.com/)

## Dependencies

You need [NPM](https://nodejs.org/) to run the Grunt taks.

* Install npm packages 

```bash
  $ npm i # install npm local packages
```

## Grunt Tasks
```bash
  $ grunt
```

  This will run almost everything and then watch changes in the /assets dir.

  The files will be outputted in the /build dir


```bash
  $ grunt test # or the below
  $ npm test # npm test will run grunt test, so... the same thing as the above
```

  This will run Jshint and Jasmine

_____________________

***This will only be tested by me in Linux Ubuntu and Mac OsX...***

Feel free to join, fork and pull request!