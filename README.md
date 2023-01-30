# React Django and PostgreSQL server

## Purpose
This project is for the purpose of learning about integrating these three technolgies: Django, PostgreSQL, and React.  It will also use Django Restframework and axios.

## Installation

* Download and install python 3, PostgreSQL, and Node.js.  
* Create a directory for this project and cd into that directory in the command line.  This folder directory will only hold the project and invironment files.
* Create a virtual environment for the project by typing, python -m venv project_env, into the command line
* login to the virtual environment by typing, project_env\Scripts\activate, into the command line (windows only)
* Install python packages: pip install Django djangorestframework django-cors-headers dj-database-url django-heroku gunicorn whitenoise python-dotenv psycopg2 psycopg2-binary djangorestframework-simplejwt
* Set up .env with SECRET_KEY=, DEBUG=false, DB_PW=, DB_NAME=, USER_NAME=
* Create a database if you haven't already.  You can do this from pgAdmin or from command line.  I used the command line.  Login with psql -U username and putting in password.  The command to make a database is CEATE DATABASE databasename;
* In the command line, type: python manage.py makemigrations and python manage.py migrate
* Install npm package from command line: npm i