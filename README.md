# Pawsitive Haven

## Introduction

Welcome to [Pawsitive Haven](https://pawsitive-haven-13024f62a5bc.herokuapp.com/).

![title]()


It can be accessed through [Pawsitive Haven](https://pawsitive-haven-13024f62a5bc.herokuapp.com/).

The Pawsitive Haven site is designed to fill a gap in dog rescue/adoption area. It is essential that once the dogs have gone into a rescue they are visible to the public to encourage adoption.

As these are often run by charities and volunteers using IT solutions to advertise and retain information on the dogs is often underutilised.

To step up the advertising campaign to get dogs adopted rather than just one picture and a list of characteristics with a paragraph about them, this site endeavours to show their personalities by getting the public involved in their timelines/posts/comments from walkers and the public. Hopefully, they will then get attached to a dog and adopt them.

The system will mean that the relevant information that the rescue requires day to day about the dog can be held in a profile, of which some parts are made public and the dog will also get a timeline, where walkers/volunteers/people involved with the dog can post pictures and stories to make the dog more appealing.

Once they are adopted the new owners can continue to post information about the dog and that way stay in contact with people who have looked after them in the rescue. Also this will give a feel good area for people thinking about adopting to see how it changes the lives of dogs.


## UX design

To achieve this there needs to be first, a backend API dealing with all the profiles, data and posts. Secondly, a Front-End site that deals with all the interactions required by 1) The Rescue staff, 2)Volunteers and Walkers, 3)Potential adopters and 4)Final owners experience of the data.


### Wireframes – FrontEnd




## Epics / User Stories / Tasks


### Epics


### User stories and tasks

 [issues](). 

## Features

### Existing Features


#### Forms on pages

All forms undergo csrf tokens to avoid any fraudulent behaviour. 


![deletemodal](document/deletemodal.png)

Deleting a charity does not delete any of the coordinators that are stated in the many to many relationship as this is not a ON_CASCADE relationship and the data of who is associated is stored against the charity. Therefore, on look up from the coordinators end for the see profile of coordinators it just won't be there any more.

#### Defensive programming


#### Flash messages

Most activities that involve change contain a flash message. If the user performs an allauth related activity (login/logout etc.) or if the user updates the database in some way a flash message should appear on the screen for 2.5 seconds. Other activities such as searches are apparent by the messages on the screen or results being displayed.

#### Search text function

This was adapted for the various searches throughout the site that are text inputs from a tutorial on youtube [youtube](https://www.youtube.com/watch?v=AGtae4L5BbI).

```HTML
        <form method=POST action="{% url 'search_charity' %}">
            {% csrf_token %}
            <input type="search" placeholder="charity name" aria-label="Charity name search" name="search">
            <button class="btn btn-outline-info" type="submit">Search Charity</button>
        </form>
```
```python
search = request.POST['search']
```


### Potential Future Feature Developments 


## Bugs


## Technologies

### Languages used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used for the coding of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) was included for styles and layout of the site.
- [python 3.11.5](https://docs.python.org/3/) for functionality.
- [JS](https://developer.mozilla.org/en-US/docs/Web/javascript) to incorporate the modal and validate the time and phone number.
### Frameworks and libraries
- [Django](https://www.djangoproject.com/) Framework based on python.
- [Boostrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for styling the site.
- [React]


### Databases

- [SQLite](https://www.sqlite.org/index.html) development database.
- [PostgreSQL](https://www.postgresql.org/) deployed database.


### Tools

- [VSCode](https://code.visualstudio.com/) was used to create and edit the website.
- [Git](https://git-scm.com/) was used for the version control and project board to plan the project.
- [Heroku](https://www.heroku.com/) was used to deploy and host site.
- [Pip3](https://pypi.org/project/pip/) was used for installing.
- [gunicorn](https://gunicorn.org/) as a Python WSGI HTTP Server.
- [dj_database_url](https://pypi.org/project/dj-database-url/) to work with Django.
- [pyscopg2](https://peps.python.org/pep-0249/) for python database access.
- [Django-allauth](https://docs.allauth.org/en/latest/) for authentication and signup/in/out pages.
- [Elephantsql](https://www.elephantsql.com/) to host the postgreSQL database for deployment.
- [DrawSQL](https://drawsql.app/) for relationship diagram drawing.

### Web resources

- [Chrome-DevTools](https://developer.chrome.com/docs/devtools/) were extremely useful for trying out different code without affecting my core code and particularly when working on responsiveness.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) was used to check for performance and accessibility.
- [HTML-markdown-validator](https://validator.w3.org/) was used to validate the HTML.
- [CSS-validator](https://jigsaw.w3.org/css-validator/) was used to perform the CSS validation.
- [PEP8Online.com](https://pep8ci.herokuapp.com/) was used to validate python coding
- [Jshint](https://jshint.com/) was used to validate the JS.
- [favicon](https://favicon.io/favicon-converter/) to generate my favicon from my logo.
- [Responsive viewer extension](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb) to produce the responsive view for my testing.
- [image compressor](https://compressnow.com/) to reduce the size of the images.
- [Canava](https://www.canva.com/en_gb/) used to generate logo


## Deployment

### Heroku deployment

The deployed version can be accessed on Heroku [here](https://*.herokuapp.com/)

Before deployment you will need to collect all the requirements into requirements.txt

```python
pip3 freeze --local > requirements.txt
```
and create a Procfile (with a capital P) containing:

```python
*
```

Ensure that the version that you want to deploy has been added, committed and pushed to GitHub (as Heroku will take it from the repository).

1. [Heroku](https://www.heroku.com/) was used to deploy.
2. If you can't see the "new" button click on the Heroku logo in the top left

![Heroku logo](/document/logo.png)

3. From here we are able to create a new app 

![icon](/document/icon.png)

4. Next the app was named pawsitive-haven in lowercase and the Europe region chosen in these fields

![name](/document/create.png)

and the purple 'create app' button was pressed.

5. Now we used the menu navigation bar to select deploy

![tab](/document/deploy-tab.png)

6. The deployment method was selected by clicking on the GitHub icon and it stated that it was connected to github

![method](/document/method-github.png)

The repository was chosen by searching my github and then clicking connect

7. Then the branch was deployed 
![branch-deploy](/document/deploy-branch.png)

12. It was deployed

![deployed](document/deployed.png)


### Local Deployment

You will need to pip install the following apps:

Cloudinary

```pip install Django-cloudinary-storage```

Pillow
```pip install Pillow```

Django 

```pip3 install 'django<4'```




### Cloning

1. In the git hub repository, code button clicked
2. clicked local
3. choose HTTPS
4. link copied
5. went to terminal of the IDE and input the following :git clone https://github.com/RachWalm/pawsitivityhaven

The project was cloned.

It will be necessary to install the list in local deployment and also set up an env.py and reference it in the settings.

The env.py needs to contain:

```python
import os

os.environ["DATABASE_URL"]="link gained from elephantSQL for the database see below"
os.environ["SECRET_KEY"]="Enter your secret key here" 
```

A .gitignore file must be used and the env.py should be added to it so that the information in there that should be kept private such as the secret key is not put on GitHub.

To run the local deployment in the IDE terminal window :

```
python3 manage.py runserver
```

## Testing 

See [Testing](TESTING.md)

## Credits

### Images

leonardoAI for default dog image na then paint to put words on

<a href="https://www.vecteezy.com/free-photos/group">Group Stock photos by Vecteezy</a>

Image by <a href="https://pixabay.com/users/sinisamaric1-3044277/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1710298">Sinisa Maric</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1710298">Pixabay</a>


Dog with roof and chimney on head
Image by <a href="https://pixabay.com/users/rfind-9166353/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5173629">Ryan F</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5173629">Pixabay</a>

Paw for buttons
Image by <a href="https://pixabay.com/users/blue-hat-graphics-24232276/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7284056">Dimuth Amarasiri</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7284056">Pixabay</a>


Background pawprints
Image by <a href="https://pixabay.com/users/natiqjavid-1602367/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6757808">Muhammad Natiq</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6757808">Pixabay</a>

Brown background pawprints from Canava

## Acknowledgements

My Mentor - Juliia Konn has been extremely enthusiastic and provided encouragement and a great deal of support.

My family - Pat Walmsley and Sarah Walmsley have tested the site on their own devices and given very useful feedback.

My Partner - Ian Harris has been extremely supportive while I have been working on this project.

Code institute - For all the information and course content that has contributed to the creation of this project. 

Code institute tutors - Who worked very hard and often were very motivational and increased my faith in myself.

W3 website for many clarifications of syntax.

Django documentation and bootstrap documentation from which I learned a great deal.