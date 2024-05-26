# Pawsitive Haven testing

## Validation

### Sites used

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) was used to check for performance and accessibility.
- [HTML-markdown-validator](https://validator.w3.org/) was used to validate the HTML.
- [CSS-validator](https://jigsaw.w3.org/css-validator/) was used to perform the CSS validation.
- [Jshint](https://jshint.com/) was used to validate the JS.
- [Responsive viewer extension](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb) to produce the responsive view for my testing.

#### Lighthouse

#### HTML

#### CSS

#### JavaScript

#### Responsive

## User stories

### Posts

#### Post Create

- As a member of staff I can create a post with a Title and picture

- As a member of staff I can create a post with a Title, text and picture

- As a member of staff I want to preview the data before submission

- If not a member of staff or not logged in my content won't save

- As a member of staff I get errors when I leave Title empty

- As a member of staff I get errors when I leave the Image empty

- As a member of staff I can leave the content empty

- If cancel button is pressed it takes me back to previous page

#### Post Edit

- As a member of staff I can Edit a post with Title 

- As a member of staff I can Edit a post with Picture 

- As a member of staff I can Edit a post with Content

- As a member of staff I can Edit a post with a Title, text and picture

- As a member of staff I want to preview the data before submission

- If not a member of staff or not logged in my content won't save

- As a member of staff I get errors when I leave Title empty

- As a member of staff I can leave the content empty

- If cancel button is pressed it takes me back to previous page

#### Individual Post view

- As anyone I can view the post including dog name, how long ago posted, posted by whom, profile image of dog, post image, post title and post content (if filled out).

- As anyone the comments section of the post is visible.

- As owner of the post if logged in I have the three dots to allow me to edit or delete (icons appear when clicked on)

- As owner when I click on the edit button it takes me to the edit section

- As owner when I click on the delete button it deletes the post.

#### Mulitple Posts page

- As anyone I can search the content of the posts text and get the appropriate results

- As anyone I can see the most recent posts first.

- As anyone I can view the post including dog name, how long ago posted, posted by whom, profile image of dog, post image, post title and post content (if filled out).

- As anyone I can click on the dog profile image and be taken to the dog profile

- As anyone I can click on the post image and be taken to the individual post

- As a user I get the no results icon instead of images if my search has no results

- As anyone I can scroll through the results and more will load if there are more to load

- As anyone a spinner is shown while the posts load

### Comments

- As anyone when looking at individual post page I can see any comments that have been made

- As anyone when looking at individual post page I am informed if there are no posts to see

- As a non-authenticated user I can't see the create form

- As an authenticated user I can create a comment

- As an authenticated user the comment button is disabled till I have put something in the comment box

- If comments have been made then how long ago, by whom and the comment should be visible

- If I am a comments owner I should have the three dots which opens into an edit or delete icons menu

- If I am not the comment owner the three dots should not be visible

- If I am the comment owner and click on the edit button the text area of the comment should become editable and any edits update in real time

- If I am the comment owner and I am editing the comment I should be able to cancel even if I have typed something and it return to view as before

- If I am the comment owner and I edit my comment and press save only the new comment should be visible and the length of time it was commented ago should be updated.

- If I am the comment owner and I click delete my comment should be deleted and no longer available.

### Dog Profile

#### Dog profile create

- As a superuser I can create a dog profile with all fields

- As a superuser I can create a dog profile with an image

- As a superuser I get error messages if I leave the dog name, general information or dog breed empty

- As a superuser I get don't error messages if I fill the dog name, general information and dog breed but leave the other fields empty

- As a superuser I want to preview the data before submission

- If not a superuser my content won't save

- As a superuser when I press save it takes me to a view of the dog profile so I can see what I have entered in a different format and check it

- If cancel button is pressed it takes me back to previous page

#### Dog profile Edit

- As a superuser I can update a dog profile with all fields

- As a superuser I can update a dog profile with an image

- As a superuser I get error messages if I leave the dog name, general information or dog breed empty

- As a superuser I get don't error messages if I fill the dog name, general information and dog breed but leave the other fields empty

- As a superuser I want to preview the data before submission

- If not a superuser my content won't save

- As a superuser when I press save it takes me to a view of the dog profile so I can see what I have entered in a different format and check it

- If cancel button is pressed it takes me back to previous page

#### Dog profile view

- As anyone I can view some of the dog details.

- As an authenticated user I can see some of the dog details and have a button to allow access to the fill out adoption request 

- As an authenticated user when I click the button to fill out adoption request it takes me to the create adoption request function

- As a member of staff I have all authenticated user functions and a create post button

- As a member of staff I can click the create post button and it will take me to the create post page linked to that dog

- As a superuser I have all the functions of a member of staff and and edit button which when clicked takes me to the edit dog profile function

- As a member of staff or super user I have additional information regarding dates, whether the dog is at the rescue and it's status

### Home / Dog Search page

- As anyone on the home page there is a call to action and a search dogs section

- As anyone a spinner shows while the dogs load

- As anyone scrolls through the dog profiles more are loaded on the end

- As anyone filter by available box is able to be ticked and unticked providing accurate results and the spinner while loading

- As anyone the search box causes a spinner while loading and gives accurate results against breed and name

- As anyone each dog profile is contained in a card with a value for name, gender and breed displayed

- As anyone each dog profile either has an image of the dog or a holding image with Image not yet available displayed

- As anyone clicking on the text within the card takes the user to the approprite dog profile page

- As anyone clicking the image of the dog takes the user to the appropriate dog profile page

### Requesting adoption

#### Create adoption request

- As an autheticated user the correct name of the dog is readonly displayed to me

- As an authenticated user I can create an adoption request with text fields empty

- As an authenticated user I can create an adoption request with all fields full

- As an authenticated user I can save Booleans as true or false

- As an authenticated user I want to preview the data before submission

- If not an authenticated user my content won't save

- As an authenticated user if cancel button is pressed it takes me back to previous page

- As an authenticated user my data saves and I am directed to a view of the data

#### Edit adoption request

- As the owner the correct name of the dog is readonly displayed to me

- As the owner I can edit an adoption request with text fields empty

- As the owner user I can edit an adoption request with all fields full

- As the owner I can save Booleans as true or false

- As the owner I want to preview the data before submission

- If not the owner user my content won't save

- As a user if cancel button is pressed it takes me back to previous page

- As the owner my data saves and I am directed to a view of the data

#### Viewing requst adopt as the requester individual record

- As the person placing the request to adopt after saving data I am redirected to a page with instructions on what to do next and the request details which should match what was saved

- As the person placing the request to adopt there should be three dots which when clicked show the edit and delete icons

- As the person placing the request to adopt when clicking the edit icon I am redirected to the edit page

- As the person placing the request to adopt when clicking the delete icon I am redirected to the delete page

#### Viewing multiple adoption requests

- As the person placing the request to adopt all the details you saved are correct

- As the person placing the request to adopt you can see the three dot menu which gives you the edit and delete icons

- As the person placing the request to adopt it tells you that it was you that placed the request

- As a member of staff you can see all adoption requests

- As a member of staff you can see the three dot menu which gives you the edit and delete buttons

- As a member of staff it only tell you it was you that placed the request when this is accurate

- As a member of staff it gives you the contact details from the user profile

### User profile

#### User profile viewing

- As an authenticated user I can see my profile

- As a non-authenticated user I can't see a profile

- As a user the edit user navigation bar is available

#### Change user name

- As an autheticated user my user name is prepopulated

- As an authenticated user I can click cancel to go back to the previous page

- As an authenticated user I can change my username and it save redirecting me to my profile where my new username is visible

- As an authenticated user it won't let me pick a username that is already in use

- As a non-autheticated user it won't let me change or view a username

- As a user the edit user navigation bar is available

#### Change password

- As an authenticated user I am asked to fill password boxes

- As an authenticated user I am given an error if the boxes are left empty, the password is unacceptable (and told how) or if the passwords don't match

- As an authenticated user I can click cancel and be taken back to where I was

- As an authenticated user I can change my password and click save with the data saved

- As a non-authenticated user I can't change a password

- As a user the edit user navigation bar is available

#### Change profile

- As a non-autheticated user I can't change a profile

- As an authenticated user if I haven't filled out my profile (or part of my profile) placeholder text is in place

- As an authenticated user any data from the server is prepopulated

- As an authenticated user I can cancel back to the page I have come from

- As an authenticated user I can change some of my profile and save and it returns me to view my profile

- As an authenticated user I can change all of my profile and save and it returns me to view my profile

- As a user the edit user navigation bar is available