## Django Webpack React BoilerPlate

This is a starter project focused on Django and Webpack Features integration.

I created this project following this [django-wepack tutorial](http://owaislone.org/blog/webpack-plus-reactjs-and-django/ "django webpack integration")

The goal is to load all webpack compiled files into django templates using the [django-webpack-loader](https://github.com/owais/django-webpack-loader "django webpack loader package") from [owais](https://github.com/owais). It give you a more easy workflow than django staticfiles.

### Instalation

- Clone this repo
- in the console run "pip install -r requirements.txt" to install py dependencies.
- cd statics
- run "npm install"
- run "./node_modules/.bin/webpack --config webpack.config.js --watch" to start webpack
- cd ../
- run "python manage.py runserver" to start django
- eat cookies and enjoy working ;)
